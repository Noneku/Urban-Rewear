import { Controller, Delete, Get, Param, Patch, Body, Post } from '@nestjs/common';
import { ArticleService } from './article.service';
import { Article } from './article.entity';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  findAll() {
    return this.articleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(Number(id));
  }

  @Post()
  create(@Body() article: Article) {
    return this.articleService.create(article);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.articleService.delete(Number(id));
    return { message: `Article with id ${id} deleted` };
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() updatedArticle: Partial<Article>) {
    const article = this.articleService.patch(Number(id), updatedArticle);
    if (article) {
      return article;
    }
    return { message: `Article with id ${id} not found` };
  }
}
