import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';

export class SignupDto {
  @ApiProperty({ example: 'test@example.com', format: 'email' })
  @IsEmail()
  public email: string;

  @ApiProperty({ example: 'testuser', minLength: 3, maxLength: 128 })
  @IsString()
  @MinLength(3)
  @MaxLength(128)
  public username: string;

  @ApiProperty({ example: 'testpassword', minLength: 8, maxLength: 128 })
  @IsString()
  @MinLength(8)
  @MaxLength(128)
  public password: string;
}
