import { Express, Request, Response } from 'express';

interface Article {
  id: number;
  title: string;
  body: string;
}

const articles: Article[] = [
  { id: 1, title: 'Hello Nx', body: 'test test test' },
  { id: 2, title: 'Learn Nx', body: 'test test test' },
  { id: 3, title: 'My Favorite Lang', body: 'test test test' },
];

export function addArticleRoutes(app: Express) {
  app.get('/articles', (req: Request, res: Response) =>
    res.status(200).send(articles)
  );
  app.get('/article/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const article = articles.find((article) => article.id === Number(id));
    return res.send(article);
  });
}
