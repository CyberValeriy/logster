import * as dotenv from 'dotenv';

dotenv.config();

const mongoConfig = {
  mongodb: {
    url: process.env.MONGO_URL,
    databaseName: process.env.MONGO_DB_NAME,
    options: {},
  },
  migrationsDir: 'migrations',
  changelogCollectionName: 'changelog',
  migrationFileExtension: '.ts',
  useFileHash: false,
  moduleSystem: 'commonjs',
};

export = mongoConfig;
