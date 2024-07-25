import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'
const sql = neon('postgresql://spendwise_owner:Ba8lKwzH4WGO@ep-delicate-cloud-a5dsyudq.us-east-2.aws.neon.tech/spendwise?sslmode=require');
export const db = drizzle(sql,{schema});
