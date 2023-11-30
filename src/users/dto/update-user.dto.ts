import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({
    type: String,
    default: null,
  })
  @IsOptional()
  @IsString()
  username?: string;

  @ApiPropertyOptional({
    type: String,
    default: null,
  })
  @IsOptional()
  @IsEmail()
  email?: string;

  @ApiPropertyOptional({ type: Boolean, default: true })
  @IsOptional()
  @IsBoolean()
  isActive: boolean;

  @ApiPropertyOptional({
    type: String,
    default: null,
  })
  @IsOptional()
  @IsString()
  address?: string;
}
