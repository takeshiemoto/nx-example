import React from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import fetch from 'node-fetch';
import { Article } from '@nx-example/data';
import ArticleList from '../components/article-list';

export interface ArticlesPageProps {
  articles: Article[];
}

export const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <>
      <h2>Articles</h2>
      <ArticleList articles={articles} />
      <Link href={`/dashboard`}>
        <a>Back</a>
      </Link>
    </>
  );
};

export default ArticlesPage;

const basePath = `http://localhost:3333`;
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${basePath}/api/articles`);
  const articles = (await response.json()) as Article[];
  return {
    props: { articles },
  };
};
