import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { CustomJwtModule } from '../custom-jwt/custom-jwt.module';
import { AuthGuard } from '../guards/auth.guard';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserReadModule } from '../../user/read/user-read.module';
import { UserWriteModule } from '../../user/write/user-write.module';
import { BcryptModule } from '../../shared/helpers/bcrypt';

/* TODO: implement Google and Github auth */
@Module({
  imports: [CustomJwtModule, UserReadModule, UserWriteModule, BcryptModule],
  controllers: [AuthController],
  providers: [AuthService, AuthGuard, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AuthModule {}
