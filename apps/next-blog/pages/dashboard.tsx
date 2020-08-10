import React, { useMemo } from 'react';
import useSWR from 'swr';
import { Article } from '@nx-example/data';
import Link from 'next/link';
import ArticleList from '../components/article-list';

const fetcher = (url: string) => fetch(url).then((response) => response.json());

export const DashboardPage = () => {
  const { data, error } = useSWR<Article[]>('/api/articles', fetcher);
  const displayCount = 3;
  const ArticleListView = useMemo(() => {
    if (error) {
      return <div>Error</div>;
    }
    if (!data) {
      return <div>Loading...</div>;
    }
    const articles = data.slice(0, displayCount);
    return (
      <>
        <ArticleList articles={articles} />
        <Link href={`/articles`}>
          <a>More...</a>
        </Link>
      </>
    );
  }, [data]);
  return (
    <>
      <h1>Dashboard</h1>
      <h2>New Article</h2>
      {ArticleListView}
    </>
  );
};

export default DashboardPage;
