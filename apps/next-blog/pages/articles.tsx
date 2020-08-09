import React from 'react';

import styled from 'styled-components';

const StyledArticles = styled.div`
  color: pink;
`;

export const ArticlesPage = () => {
  return (
    <StyledArticles>
      <h1>Welcome to articles!</h1>
    </StyledArticles>
  );
};

export default ArticlesPage;
