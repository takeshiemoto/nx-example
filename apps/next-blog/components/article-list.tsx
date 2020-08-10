import React from 'react';

import { Article } from '@nx-example/data';
import Link from 'next/link';

export interface ArticleListProps {
  articles: Article[];
}
export const ArticleList = React.memo(({ articles }: ArticleListProps) => {
  return (
    <ul>
      {articles.map((article) => (
        <li key={article.id}>
          <Link href={`/article/[id]`} as={`/article/${article.id}`}>
            <a>{article.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
});

export default ArticleList;
