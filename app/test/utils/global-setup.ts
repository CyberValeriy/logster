import 'dotenv/config'; /* Switch to proper config setup */
import { createClickHouseTestContainer } from './clickhouse-test-container-server';

export default async () => {
  console.log('\nStarting global test setup...');

  try {
    await Promise.all([createClickHouseTestContainer()]);
  } catch (error) {
    console.error('Failed to start test containers:', error);
    throw error;
  }

  console.log('Global test setup completed');
};
