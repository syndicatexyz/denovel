import { Client } from "https://deno.land/x/postgres/mod.ts";
import { postgres } from "../../../config/database.ts";

export async function connectPgsql<T>(Postgres: postgres): Promise<Client> {
  const client = new Client({
    user: Postgres.user,
    database: Postgres.database,
    hostname: Postgres.host,
    password: Postgres.password,
    port: Postgres.port
  });

  await client.connect();
  
  return client;
}