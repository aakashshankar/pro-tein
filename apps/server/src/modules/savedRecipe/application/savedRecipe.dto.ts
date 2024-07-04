import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class SavedRecipeCreateDto {
  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  recipeId?: string

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

export class SavedRecipeUpdateDto {
  @IsString()
  @IsOptional()
  userId?: string

  @IsString()
  @IsOptional()
  recipeId?: string

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
