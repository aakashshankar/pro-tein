import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator'

export class FollowCreateDto {
  @IsString()
  @IsOptional()
  followerId?: string

  @IsString()
  @IsOptional()
  followeeId?: string

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

export class FollowUpdateDto {
  @IsString()
  @IsOptional()
  followerId?: string

  @IsString()
  @IsOptional()
  followeeId?: string

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
