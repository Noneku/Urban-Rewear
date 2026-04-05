import { Controller, Delete, Get, Param, Patch, Body, Post, UseGuards } from '@nestjs/common';
import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { JwtAuthGuard } from 'src/auth/jwt.guard';

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

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() article: CreateArticleDto) {
    return this.articleService.create(article);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    this.articleService.delete(Number(id));
    return { message: `Article with id ${id} deleted` };
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  patch(@Param('id') id: string, @Body() updatedArticle: UpdateArticleDto) {
    const article = this.articleService.patch(Number(id), updatedArticle);
    if (article) {
      return article;
    }
    return { message: `Article with id ${id} not found` };
  }
}
