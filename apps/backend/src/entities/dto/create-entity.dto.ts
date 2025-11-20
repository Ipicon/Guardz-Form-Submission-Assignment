import {
  IsString,
  IsNotEmpty,
  IsEmail,
  IsInt,
  Min,
  IsOptional,
} from 'class-validator';

export class CreateEntityDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @Min(18)
  age: number;

  @IsString()
  @IsOptional()
  about?: string;
}
