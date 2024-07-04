import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class RecipeDietaryRestrictionCreateDto {
  @IsString()
  @IsOptional()
  recipeId?: string

  @IsString()
  @IsOptional()
  dietaryRestrictionId?: string

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

export class RecipeDietaryRestrictionUpdateDto {
  @IsString()
  @IsOptional()
  recipeId?: string

  @IsString()
  @IsOptional()
  dietaryRestrictionId?: string

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
