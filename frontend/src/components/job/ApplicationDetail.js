import React, { useEffect, useState } from 'react';

import Modal from '../Modal';
import { ApplicationDetailInfo, CursorPointer } from './StyledComponents';
import { ReactComponent as CancelSVG } from '../../assets/cancel.svg';

const ApplicationDetail = ({ application, setApplication, companyName }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    console.log('change application');
    if (application === null) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [application]);

  const closeModal = () => {
    setApplication(null);
  };

  return (
    <Modal show={show} closeModal={closeModal}>
      {!application ? null : (
        <ApplicationDetailInfo>
          <div className="sidebar">
            <p className="name">{application.professional.name}</p>
            <p className="professional_description">
              {application.professional.description}
            </p>
          </div>
          <div className="header">
            <p className="text">Application</p>
            <CursorPointer as={CancelSVG} onClick={closeModal} />
          </div>
          <div className="content">
            <p className="title_section">Profesional Experience</p>
            <p className="text_section">{application.professionalExperience}</p>
            <p className="title_section">
              Why are you interested in working at {companyName}?
            </p>
            <p className="text_section">{application.reason}</p>
            <a
              className="download_cv"
              href={process.env.REACT_APP_HTTP + '/' + application.cvPath}
              rel="cv"
              target="_blank"
            >
              Download CV
            </a>
          </div>
        </ApplicationDetailInfo>
      )}
    </Modal>
  );
};

export default ApplicationDetail;
