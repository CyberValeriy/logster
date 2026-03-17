import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'test@example.com', format: 'email' })
  @IsEmail()
  public email: string;

  @ApiProperty({ example: 'testpassword', minLength: 8, maxLength: 128 })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  public password: string;
}
