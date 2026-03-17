import { MongoMemoryServer } from 'mongodb-memory-server';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';

let mongod: MongoMemoryServer;

export const rootMongooseTestModule = (options: MongooseModuleOptions = {}) =>
  MongooseModule.forRootAsync({
    useFactory: async () => {
      mongod = await MongoMemoryServer.create({});
      const uri = mongod.getUri();

      return {
        uri,
        ...options,
      };
    },
  });

export const closeInMemoryMongoConnection = async () => {
  if (mongod) {
    await mongod.stop();
  }
};
