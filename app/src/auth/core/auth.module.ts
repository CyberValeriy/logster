import { Module } from '@nestjs/common';
import { CustomJwtModule } from '../custom-jwt/custom-jwt.module';
import { AuthGuard } from '../guards/auth.guard';
import { APP_GUARD } from '@nestjs/core';

/* Todo: implement Google and Github auth */
@Module({
  imports: [CustomJwtModule],
  providers: [AuthGuard, { provide: APP_GUARD, useClass: AuthGuard }],
})
export class AuthModule {}
