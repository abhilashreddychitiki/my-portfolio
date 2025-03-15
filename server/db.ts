import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Check if DATABASE_URL exists
if (!process.env.DATABASE_URL) {
  throw new Error(
    "DATABASE_URL environment variable is not set. Please check your .env file."
  );
}

// Use environment variable for the connection string
const sql = neon(process.env.DATABASE_URL);
export const db = drizzle(sql, { schema });
