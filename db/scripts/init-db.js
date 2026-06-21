import { Client } from 'pg';
import fs from 'node:fs/promises';

const targetEnv = process.argv[2];

if (!targetEnv) {
  console.error('Failed: You must specify a target environment: local/prod');
  process.exit(1);
}

let databaseUrl;

switch (targetEnv) {
  case 'dev':
    if (process.env.NODE_ENV !== 'development') {
      console.error('Failed: Cannot target dev database outside of dev mode.');
      process.exit(1);
    }
  case 'local':
    databaseUrl = process.env.DATABASE_URL;
    break;
  case 'prod':
    databaseUrl = process.env.PROD_DATABASE_URL;
    break;
  default:
    console.error('Failed: Invalid target environment:', targetEnv);
    process.exit(1);
}

const client = new Client({ connectionString: databaseUrl });
await client.connect();

console.log(`Resetting tables...`);
await client.query(await fs.readFile('db/scripts/reset.sql', 'utf8'));

console.log(`Seeding tables...`);
await client.query(await fs.readFile('db/scripts/seed.sql', 'utf8'));

console.log('Done');
await client.end();
