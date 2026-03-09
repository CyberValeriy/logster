import { Injectable } from '@nestjs/common';
import { getEnvConfig } from '../../shared';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis(getEnvConfig().redis.url);
  }
}
