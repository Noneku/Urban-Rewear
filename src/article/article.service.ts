import { Injectable, NotFoundException } from '@nestjs/common';
import { Article } from './article.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticleService {
  constructor(private readonly prisma: PrismaService) {}

  create(article: CreateArticleDto): Promise<Article> {
    return this.prisma.article.create({ data: article });
  }

  findAll(): Promise<Article[]> {
    return this.prisma.article.findMany();
  }

async findOne(id: number): Promise<Article> {
  const article = await this.prisma.article.findUnique({ where: { id } });
  
  if (!article) {
    throw new NotFoundException(`Article with id ${id} not found`);
  }
  
  return article;
}

  async delete(id: number): Promise<Article> {
    const article = await this.prisma.article.findUnique({ where: { id } });

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    return this.prisma.article.delete({ where: { id } });
  }

  async patch(id: number, updatedArticle: UpdateArticleDto): Promise<Article> {
    const article = await this.prisma.article.findUnique({ where: { id } });

    if (!article) {
      throw new NotFoundException(`Article with id ${id} not found`);
    }

    return this.prisma.article.update({
      where: { id },
      data: updatedArticle,
    });
  }
}