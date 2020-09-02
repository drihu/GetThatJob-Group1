import styled from '@emotion/styled/macro';
import { Link } from 'react-router-dom';

export const ReturnLink = styled(Link)`
  display: flex;
  flex-direction: row;
  color: #3c2dff;
  margin-bottom: 27px;

  p {
    margin-left: 11px;
  }
`;

export const SubTitle = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const PostedText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;

  color: #718096;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 44px;
  margin-bottom: 20px;
`;

export const TitleWithoutMargin = styled(Title)`
  margin-bottom: 2px;
`;

export const JobTypeAndSeniority = styled.div`
  display: flex;
  flex-direction: row;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  margin-bottom: 25px;

  div {
    padding: 1px 8px;
    color: #ffffff;

    background: #3c2dff;
    border: 1px solid #3c2dff;
    border-radius: 4px;
  }

  div:last-child {
    margin-left: 5px;
  }
`;

export const GeneralTextJob = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
`;

export const SubSectionTitle = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 24px;
  margin-bottom: 12px;
  margin-top: 24px;
`;

export const JobDetailContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr min-content;
  column-gap: 43px;
  width: 100%;
  align-items: start;
`;

export const JobCard = styled.div`
  width: 250px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  padding: 40px 32px 16px 32px;
  align-items: center;
  text-align: center;
`;

export const CompanyLogo = styled.img`
  max-width: 100%;
  max-height: 100px;
`;

export const CompanyName = styled.p`
  margin-top: 12px;
  margin-bottom: 12px;
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 38px;
  word-break: break-word;
`;

export const GroupHorizontal = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: min-content 1fr;
  column-gap: 8px;
  align-items: center;
  margin-bottom: 4px;
`;

export const GeneralTextCompany = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
`;

export const LinkWebsiteCompany = styled(GeneralTextCompany)`
  text-decoration-line: underline;
  cursor: pointer;
`.withComponent('a');

export const LinkStyled = styled.a`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  background-color: #3c2dff;
  width: 100%;
  padding: 8px 0px;
  cursor: pointer;
  margin-top: 41px;
`;

export const Separator = styled.div`
  border: 1px solid #000000;
  width: 100%;
  margin-top 16px;
  margin-bottom: 16px;
`;

export const Table = styled.table`
  border-spacing: 0;
  margin-bottom: 20px;

  thead {
    background-color: #fafafa;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }

  thead tr th,
  tbody td {
    text-align: left;
    padding: 16px 24px 16px 16px;
    width: fit-content;
    min-width: 200px;
  }

  tbody tr {
    background-color: #ffffff;
    cursor: pointer;
  }

  tbody tr:nth-of-type(2n) {
    background-color: #e6f7ff;
  }
`;

export const CloseJobButton = styled.p`
  cursor: pointer;
  color: #f5222d;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  margin-left: 15px;
`;

export const ApplicationDetailInfo = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: min-content 1fr;
  grid-template-areas:
    'sidebar header'
    'sidebar content';

  .sidebar {
    min-width: 200px;
    grid-area: sidebar;
    background-color: #ffffff;
    padding: 24px;
  }

  .sidebar .name {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 28px;
  }

  .sidebar .professional_description {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
  }

  .header {
    grid-area: header;
    display: flex;
    flex-direction: rows;
    align-items: center;
    justify-content: space-between;
    width: 825px;
    height: fit-content;
    padding-right: 28px;
  }

  .header .text {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    padding: 9px 25px;

    border-bottom: 2px solid #096dd9;
  }

  .content {
    grid-area: content;
    background-color: #f7fafc;
    padding: 40px 28px;
  }

  .content .title_section {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 12px;
  }

  .content .text_section {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .download_cv {
    margin-top: 10px;
    color: #3c2dff;
    border: 1px solid #3c2dff;
    background: #ffffff;
    padding: 8px 16px;
  }
`;

export const CursorPointer = styled.svg`
  cursor: pointer;
`;
