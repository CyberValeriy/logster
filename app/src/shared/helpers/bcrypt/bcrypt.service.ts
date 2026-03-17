import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

const BCRYPT_SALT_ROUNDS = 10;

@Injectable()
export class BcryptService {
  public async hash(plain: string): Promise<string> {
    return bcrypt.hash(plain, BCRYPT_SALT_ROUNDS);
  }

  public async compare(plain: string, hashed: string): Promise<boolean> {
    return bcrypt.compare(plain, hashed);
  }
}
