import { Express, Request, Response } from 'express';
import { Article } from '@nx-example/data';

const articles: Article[] = [
  { id: 1, title: 'Effective JavaScript', body: 'test test test' },
  { id: 2, title: 'Learn Node.js', body: 'test test test' },
  { id: 3, title: 'Programing Scala', body: 'test test test' },
  { id: 4, title: 'Learn TypeScript', body: 'test test test' },
  { id: 5, title: 'Domain Driven Development', body: 'test test test' },
  { id: 6, title: 'Programing Go', body: 'test test test' },
];

export function addArticleRoutes(app: Express) {
  app.get('/api/articles', (req: Request, res: Response) =>
    res.status(200).send(articles)
  );
  app.get('/api/article/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const article = articles.find((article) => article.id === Number(id));
    return res.send(article);
  });
}
