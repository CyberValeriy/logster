import { IsEmail, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsEmail()
  public email: string;

  @IsString()
  @MinLength(3)
  public username: string;

  @IsString()
  @MinLength(8)
  public password: string;
}
