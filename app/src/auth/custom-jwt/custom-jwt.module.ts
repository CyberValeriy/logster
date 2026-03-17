import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { CustomJwtService } from './custom-jwt.service';
import { getEnvConfig } from '../../shared';

/* Long-lived access token for now; TODO: implement refresh token rotation */
@Module({
  imports: [
    JwtModule.register({
      secret: getEnvConfig().auth.jwtSecret,
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [CustomJwtService],
  exports: [CustomJwtService],
})
export class CustomJwtModule {}
