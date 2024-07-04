import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class RecipeCreateDto {
  @IsString()
  @IsNotEmpty()
  title: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  instructions?: string

  @IsNumber()
  @IsOptional()
  cookingTime?: number

  @IsString()
  @IsOptional()
  nutritionalInfo?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}

export class RecipeUpdateDto {
  @IsString()
  @IsOptional()
  title?: string

  @IsString()
  @IsOptional()
  description?: string

  @IsString()
  @IsOptional()
  instructions?: string

  @IsNumber()
  @IsOptional()
  cookingTime?: number

  @IsString()
  @IsOptional()
  nutritionalInfo?: string

  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  dateCreated?: string

  @IsString()
  @IsOptional()
  dateDeleted?: string

  @IsString()
  @IsOptional()
  dateUpdated?: string
}
