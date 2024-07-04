import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class RecipeIngredientCreateDto {
  @IsNumber()
  @IsNotEmpty()
  quantity: number

  @IsString()
  @IsNotEmpty()
  unit: string

  @IsString()
  @IsOptional()
  recipeId?: string

  @IsString()
  @IsOptional()
  ingredientId?: string

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

export class RecipeIngredientUpdateDto {
  @IsNumber()
  @IsOptional()
  quantity?: number

  @IsString()
  @IsOptional()
  unit?: string

  @IsString()
  @IsOptional()
  recipeId?: string

  @IsString()
  @IsOptional()
  ingredientId?: string

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
