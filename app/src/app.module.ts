import { Module } from '@nestjs/common';
import { UserModule } from './user/core/user.module';
import { PlatformModule } from './platform/platform.module';
import { AuthModule } from './auth/core/auth.module';

@Module({
  imports: [PlatformModule, UserModule, AuthModule],
})
export class AppModule {}
