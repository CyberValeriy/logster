import { Module } from '@nestjs/common';
import { UserModule } from './user/core/user.module';
import { PlatformModule } from './platform/platform.module';

@Module({
  imports: [PlatformModule, UserModule],
})
export class AppModule {}
