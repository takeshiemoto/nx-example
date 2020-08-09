import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface IdProps {}

const StyledId = styled.div`
  color: pink;
`;

export const ArticlePage = (props: IdProps) => {
  return (
    <StyledId>
      <h1>Welcome to id!</h1>
    </StyledId>
  );
};

export default ArticlePage;
