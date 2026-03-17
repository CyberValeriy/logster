import { Test, TestingModule } from '@nestjs/testing';
import { closeInMemoryMongoConnection, rootMongooseTestModule } from './mongo-in-memory-server';
import { rootClickHouseTestModule } from './clickhouse-test-container-server';
import { AuthModule } from '../../src/auth/core/auth.module';
import { UserModule } from '../../src/user/core/user.module';

import { EventEmitterModule } from '@nestjs/event-emitter';
import { ValidationPipe } from '@nestjs/common';
import { UserEntity } from '../../src/user/schemas/user.schema';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { clear } from 'jest-date-mock';
import * as nock from 'nock';
import { ClickHouseClient } from '@clickhouse/client';

export async function createTestApp() {
  const moduleBuilder = Test.createTestingModule({
    imports: [rootMongooseTestModule(), rootClickHouseTestModule(), AuthModule, UserModule, EventEmitterModule.forRoot()],
  });

  const module: TestingModule = await moduleBuilder.compile();

  const app = module.createNestApplication();

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  );

  await app.init();

  /* Database cleanup */
  const userModel: Model<UserEntity> = module.get(getModelToken(UserEntity.name));

  const databaseCleanup = async () => {
    await userModel.deleteMany({});
  };

  const beforeEach = async () => {
    clear();
    await databaseCleanup();
    nock.cleanAll();
  };

  const afterAll = async () => {
    await app.close();
    await closeInMemoryMongoConnection();
    clear();
  };

  return {
    app,
    module,
    models: {
      userModel,
    },
    methods: {
      afterAll,
      beforeEach,
      databaseCleanup,
    },
    clickhouseClient: app.get(ClickHouseClient),
  };
}
