import { CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { CustomJwtService } from '../custom-jwt/custom-jwt.service';

export class AuthGuard implements CanActivate {
  constructor(private readonly customJwtService: CustomJwtService) {}

  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.split(' ')[1];

    if (!token) {
      return false;
    }

    const payload = await this.customJwtService.getTokenPayload(token);

    if (!payload) {
      return false;
    }

    request.user = payload;

    return true;
  }
}
