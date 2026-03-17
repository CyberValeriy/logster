import { Module } from '@nestjs/common';
import { RedisModule } from './redis/redis.module';
import { ClickhouseModule } from './clickhouse/clickhouse.module';
import { MongooseModule } from '@nestjs/mongoose';
import { getEnvConfig } from '../shared';

@Module({
  imports: [
    RedisModule,
    ClickhouseModule,
    MongooseModule.forRoot(getEnvConfig().mongo.url, {
      autoIndex: false,
      autoCreate: false,
    }),
  ],
})
export class PlatformModule {}
