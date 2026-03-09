import { Global, Module } from '@nestjs/common';
import { ClickHouseClient, createClient } from '@clickhouse/client';
import { getEnvConfig } from '../shared';

@Global()
@Module({
  providers: [
    {
      provide: ClickHouseClient,
      useFactory: async () => {
        const { host, ...rest } = getEnvConfig().clickhouse;

        const client = createClient({ ...rest, url: host });
        const pingResult = await client.ping();

        if (!pingResult.success) {
          throw new Error('Failed to init Clickhouse connection...');
        }

        return client;
      },
    },
  ],
  exports: [ClickHouseClient],
})
export class ClickhouseModule {}
