import React from 'react';
import fetch from 'node-fetch';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Article } from '@nx-example/data';
import Head from 'next/head';
import Link from 'next/link';

export interface ArticlePageProps {
  article: Article;
}
export const ArticlePage = ({ article }: ArticlePageProps) => {
  return (
    <>
      <Head>
        <title>{article.title}</title>
      </Head>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <Link href={`/dashboard`}>
        <a>Back</a>
      </Link>
    </>
  );
};

const basePath = `http://localhost:3333`;
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(`${basePath}/api/articles`);
  const articles = (await response.json()) as Article[];
  const paths = articles.map((article) => `/article/${article.id}`);
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const response = await fetch(`${basePath}/api/article/${params.id}`);
  const article = await response.json();
  return {
    props: { article },
  };
};

export default ArticlePage;
