import { Module } from '@nestjs/common';
import { RedisModule } from '@nestjs-modules/ioredis';

import { ClickhouseModule } from './clickhouse/clickhouse.module';

import { MongooseModule } from '@nestjs/mongoose';
import { getEnvConfig } from './shared';
import { UserModule } from './user/core/user.module';

@Module({
  imports: [
    /* Combine into Platform module */
    ClickhouseModule,
    MongooseModule.forRoot(getEnvConfig().mongo.url, {
      autoIndex: false,
      autoCreate: false,
    }),
    RedisModule.forRoot({
      type: 'single',
      url: getEnvConfig().redis.url,
    }),

    /* Business logic modules */
    UserModule,
  ],
})
export class AppModule {}
