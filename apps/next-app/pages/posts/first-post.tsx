import React from 'react';

import styled from 'styled-components';
import Link from 'next/link';
import Head from "next/head";

/* eslint-disable-next-line */
export interface FirstPostProps {}

const StyledFirstPost = styled.div`
  color: pink;
`;

export const FirstPost = (props: FirstPostProps) => {
  return (
    <StyledFirstPost>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <img src='/nx-logo-white.svg' />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </StyledFirstPost>
  );
};

export default FirstPost;
