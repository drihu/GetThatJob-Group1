defmodule GetthatjobWeb.Schema.Schema do
  use Absinthe.Schema

  alias Getthatjob.Recruitment

  alias GetthatjobWeb.Resolvers
  alias GetthatjobWeb.Schema.Middleware

  import_types(GetthatjobWeb.Schema.Types)

  query do
    @desc "Get a Job by id"
    field :job, :job do
      arg(:id, non_null(:integer))
      resolve(&Resolvers.Recruitment.job/3)
    end

    @desc "Get a list of jobs"
    field :jobs, list_of(:job) do
      arg(:limit, :integer)
      arg(:order, type: :sort_order, default_value: :asc)
      arg(:filter, :job_filter)

      resolve(&Resolvers.Recruitment.jobs/3)
    end

    @desc "Get the currently signed-in user"
    field :me, :user do
      resolve(&Resolvers.Accounts.me/3)
    end

    @desc "Get jobs of current recruiter"
    field :jobs_current_recruiter, list_of(:job) do
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.jobs_of_current_recruiter/3)
    end

    @desc "Get jobs of current professional"
    field :applications_current_professional, list_of(:application) do
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.applications_of_current_professional/3)
    end

    @desc "Get a Job by id of current recruiter"
    field :job_current_recruiter, :job do
      arg(:id, non_null(:integer))
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.job_of_current_recruiter/3)
    end

    @desc "Get seniorities"
    field :seniorities, list_of(:seniority) do
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.seniorities/3)
    end

    @desc "Get jobs types"
    field :job_types, list_of(:job_type) do
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.job_types/3)
    end

    @desc "Get Cities"
    field :cities, list_of(:city) do
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.cities/3)
    end

    @desc "Get Countries"
    field :countries, list_of(:country) do
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.countries/3)
    end
  end

  mutation do
    @desc "Sign in a user"
    field :sign_in, :session do
      arg(:email, non_null(:string))
      arg(:password, non_null(:string))
      resolve(&Resolvers.Accounts.sign_in/3)
    end

    @desc "Create a professional user account"
    field :sign_up_professional, :session do
      arg(:user, non_null(:user_input))

      resolve(&Resolvers.Accounts.sign_up_professional/3)
    end

    @desc "Create a recruiter user account"
    field :sign_up_recruiter, :session do
      arg(:user, non_null(:user_input))
      arg(:company_name, non_null(:string))
      arg(:company_logo_meta, non_null(:upload))
      arg(:company_website, non_null(:string))
      arg(:company_description, non_null(:string))

      resolve(&Resolvers.Accounts.sign_up_recruiter/3)
    end

    @desc "Edit current professional"
    field :update_current_professional, :professional do
      arg(:name, non_null(:string))
      arg(:phone_number, non_null(:string))
      arg(:description, non_null(:string))
      arg(:experience, non_null(:string))
      arg(:linkedin, :string)
      arg(:github, :string)

      middleware(Middleware.Authenticate)
      resolve(&Resolvers.Accounts.update_current_professional/3)
    end

    @desc "Edit current recruiter"
    field :update_current_recruiter, :recruiter do
      arg(:company_name, non_null(:string))
      arg(:company_logo_meta, :upload)
      arg(:company_website, non_null(:string))
      arg(:company_description, non_null(:string))

      middleware(Middleware.Authenticate)
      resolve(&Resolvers.Accounts.update_current_recruiter/3)
    end

    @desc "Delete current user"
    field :delete_current_user, :user_id do
      middleware(Middleware.Authenticate)
      resolve(&Resolvers.Accounts.delete_user/3)
    end

    @desc "Create a Job"
    field :create_job, :job do
      arg(:title, non_null(:string))
      arg(:type_id, non_null(:integer))
      arg(:seniority_id, non_null(:integer))
      arg(:salary, :integer)
      arg(:city_id, non_null(:integer))
      arg(:introduction, non_null(:string))
      arg(:expected, non_null(:string))
      arg(:looking_for, non_null(:string))
      arg(:requirements, non_null(:string))

      middleware(Middleware.Authenticate)
      resolve(&Resolvers.Recruitment.create_job/3)
    end

    @desc "Close a job by id of current recruiter "
    field :close_job, :job do
      arg(:id, non_null(:integer))
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.close_job_of_current_recruiter/3)
    end

    @desc "Withdraw a application of current professional"
    field :withdraw_application, :application_id do
      arg(:id, non_null(:integer))
      middleware(Middleware.Authenticate)

      resolve(&Resolvers.Recruitment.withdraw_application_of_current_professional/3)
    end
  end

  def context(ctx) do
    loader =
      Dataloader.new()
      |> Dataloader.add_source(Recruitment, Recruitment.datasource())

    Map.put(ctx, :loader, loader)
  end

  def plugins do
    [Absinthe.Middleware.Dataloader] ++ Absinthe.Plugin.defaults()
  end
end
