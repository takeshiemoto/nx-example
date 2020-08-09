import React from 'react';

import styled from 'styled-components';

const StyledDashboard = styled.div`
  color: pink;
`;

export const DashboardPage = () => {
  return (
    <StyledDashboard>
      <h1>Welcome to dashboard!</h1>
    </StyledDashboard>
  );
};

export default DashboardPage;
