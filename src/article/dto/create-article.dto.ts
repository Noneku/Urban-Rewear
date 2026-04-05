import { IsString, IsNumber, IsUrl, Min } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  condition!: string;

  @IsString()
  size!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsUrl()
  vintedLink!: string;
}