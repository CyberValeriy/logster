import { Injectable } from '@nestjs/common';

/* Simple auth service (Iteration 1) */
@Injectable()
export class AuthService {
  public constructor(private readonly userReadRepository: UserReadRepository) {}
}
