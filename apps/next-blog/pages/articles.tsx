import React from 'react';
import { GetStaticProps } from 'next';
import Link from 'next/link';
import fetch from 'node-fetch';
import { Article } from '@nx-example/data';

export interface ArticlesPageProps {
  articles: Article[];
}

export const ArticlesPage = ({ articles }: ArticlesPageProps) => {
  return (
    <>
      <h2>Articles</h2>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
      <Link href={`/dashboard`}>
        <a>Back</a>
      </Link>
    </>
  );
};

export default ArticlesPage;

const basePath = `http://localhost:3333`;
export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch(`${basePath}/api/articles`);
  const articles = (await response.json()) as Article[];
  return {
    props: { articles },
  };
};
