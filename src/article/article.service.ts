import { Injectable } from '@nestjs/common';
import { Article } from './article.entity';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

  findOne(id: number): Promise<Article | null> {
    return this.prisma.article.findUnique({ where: { id } });
  }

  delete(id: number): Promise<Article | null> {
    return this.prisma.article.delete({ where: { id } });
  }

    patch(id: number, updatedArticle: Partial<Article>): Promise<Article | null> {
    return this.prisma.article.update({
      where: { id },
      data: updatedArticle,
    });
}
}