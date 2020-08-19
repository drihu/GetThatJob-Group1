import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

import jobsIcon from '../assets/jobs-icon.png';
import applicationsIcon from '../assets/applications-icon.png';
import profileIcon from '../assets/profile-icon.png';

const Wrapper = styled.aside`
  padding: 30px 0;
  background: #ffffff;

  .icon {
    margin-right: 10px;
  }
`;

const MyLink = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 15px 30px;
  color: #595959;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-decoration: none;

  &.active {
    background: #f7fafc;
    font-weight: 600;
  }
`;

export default function Sidebar() {
  return (
    <Wrapper>
      <MyLink to="/jobs">
        <img src={jobsIcon} className="icon" alt="get-that-job" />
        <span>Jobs for you</span>
      </MyLink>

      <MyLink to="/applications">
        <img src={applicationsIcon} className="icon" alt="get-that-job" />
        <span>Your applications</span>
      </MyLink>

      <MyLink to="/profile">
        <img src={profileIcon} className="icon" alt="get-that-job" />
        <span>Your profile</span>
      </MyLink>
    </Wrapper>
  );
}