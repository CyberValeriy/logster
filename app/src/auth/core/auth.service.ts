import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { CustomJwtService } from '../custom-jwt/custom-jwt.service';
import { BcryptService } from '../../shared/helpers/bcrypt';
import { IUserReadService } from '../../user/interfaces/services';
import { IUserWriteService } from '../../user/interfaces/services';
import { SignupDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

/* TODO: implement refresh tokens and more auth providers (Google, Github) soon */

@Injectable()
export class AuthService {
  public constructor(
    private readonly userReadService: IUserReadService,
    private readonly customJwtService: CustomJwtService,
    private readonly userWriteService: IUserWriteService,
    private readonly bcryptService: BcryptService,
  ) {}

  public async signup(dto: SignupDto): Promise<{ accessToken: string }> {
    const existingUser = await this.userReadService.readUserByEmail(dto.email);

    if (existingUser) {
      throw new ConflictException('User with this email already exists');
    }

    const hashedPassword = await this.bcryptService.hash(dto.password);

    const user = await this.userWriteService.createUser({
      email: dto.email,
      username: dto.username,
      password: hashedPassword,
    });

    const accessToken = await this.customJwtService.sign({ id: user.id });

    return { accessToken };
  }

  public async login(dto: LoginDto): Promise<{ accessToken: string }> {
    const user = await this.userReadService.readUserByEmail(dto.email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.bcryptService.compare(dto.password, user.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const accessToken = await this.customJwtService.sign({ id: user.id });

    return { accessToken };
  }
}
