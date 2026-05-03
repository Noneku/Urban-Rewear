import { IsArray, IsIn, IsNumber, IsOptional, IsString, Min } from 'class-validator';

export class CreateArticleDto {
  @IsString()
  name!: string;

  @IsString()
  description!: string;

  @IsString()
  condition!: string;

  @IsIn(['Homme', 'Femme'])
  gender!: string;

  @IsIn(['friperie', 'marque'])
  section!: string;

  @IsString()
  size!: string;

  @IsNumber()
  @Min(0)
  price!: number;

  @IsString()
  imageUrl!: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  images: string[] = [];

  @IsString()
  vintedLink!: string;
}