import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    type: String,
    default: null,
  })
  @IsString()
  username: string;

  @ApiProperty({ type: String, required: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ type: String, default: null })
  @IsString()
  address: string;

  @ApiProperty({ type: Boolean, default: true })
  @IsBoolean()
  isActive: boolean;
}
