import { getOurEnv, OurEnv } from '../types/our-env.enum';

interface EnvConfig {
  mongo: {
    url: string;
  };
  redis: {
    url: string;
  };
  clickhouse: {
    host: string;
    username: string;
    password: string;
    database: string;
  };
  auth: {
    jwtSecret: string;
  };
}

const EnvConfigs: Record<OurEnv, EnvConfig> = {
  [OurEnv.Dev]: {
    mongo: {
      url: process.env.MONGO_URL!,
    },
    redis: {
      url: process.env.REDIS_URL!,
    },
    clickhouse: {
      host: process.env.CLICKHOUSE_HOST!,
      username: process.env.CLICKHOUSE_USER!,
      password: process.env.CLICKHOUSE_PASSWORD!,
      database: process.env.CLICKHOUSE_DATABASE!,
    },
    auth: {
      jwtSecret: process.env.AUTH_JWT_SECRET!,
    },
  },
  [OurEnv.Prod]: {
    mongo: {
      url: process.env.MONGO_URL!,
    },
    redis: {
      url: process.env.REDIS_URL!,
    },
    clickhouse: {
      host: process.env.CLICKHOUSE_HOST!,
      username: process.env.CLICKHOUSE_USER!,
      password: process.env.CLICKHOUSE_PASSWORD!,
      database: process.env.CLICKHOUSE_DATABASE!,
    },
    auth: {
      jwtSecret: process.env.AUTH_JWT_SECRET!,
    },
  },
};

export function getEnvConfig(): EnvConfig {
  return EnvConfigs[getOurEnv()];
}
