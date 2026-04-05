import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';

@Injectable()
export class ArticleService {
  private articles: Article[] = [
    {
      id: 1,
      name: 'Jean vintage Levis',
      description: 'Jean coupe droite années 90',
      condition: 'Bon état',
      size: 'M',
      price: 25,
      addedAt: new Date(),
      vintedLink: 'https://vinted.fr/items/123',
    },
  ];

  findAll(): Article[] {
    return this.articles;
  }

  findOne(id: number): Article | undefined {
    return this.articles.find(article => article.id === id);
  }

  delete(id: number): void {
    this.articles = this.articles.filter(article => article.id !== id);
    }

    patch(id: number, updatedArticle: Partial<Article>): Article | undefined {
    const article = this.findOne(id);

    if (article) {
      Object.assign(article, updatedArticle);
      return article;
    }
    return undefined;
}
}