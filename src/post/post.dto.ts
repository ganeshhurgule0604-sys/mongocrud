import { PartialType } from '@nestjs/mapped-types';
import {
  IsMongoId,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsString()
  status?: string;

  @IsMongoId()
  user?: string;
}

export class UpdatePostDto  extends PartialType(CreatePostDto){}