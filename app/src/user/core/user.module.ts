import { Module } from '@nestjs/common';
import { UserRepositoriesModule } from '../repositories/user.repositories.module';

@Module({
  imports: [UserRepositoriesModule],
})
export class UserModule {}
