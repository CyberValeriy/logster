import { Module } from '@nestjs/common';

import { ClickhouseModule } from './clickhouse/clickhouse.module';

import { MongooseModule } from '@nestjs/mongoose';
import { getEnvConfig } from './shared';
import { UserModule } from './user/core/user.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [
    /* Combine into Platform module */
    RedisModule,
    ClickhouseModule,
    MongooseModule.forRoot(getEnvConfig().mongo.url, {
      autoIndex: false,
      autoCreate: false,
    }),

    /* Business logic modules */
    UserModule,
  ],
})
export class AppModule {}
