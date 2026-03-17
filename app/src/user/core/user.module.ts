import { Module } from '@nestjs/common';
import { UserReadModule } from '../read/user-read.module';
import { UserWriteModule } from '../write/user-write.module';

@Module({
  imports: [UserReadModule, UserWriteModule],
})
export class UserModule {}
