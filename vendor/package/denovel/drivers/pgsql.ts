import { Client } from "https://deno.land/x/postgres/mod.ts";

export async function connectPgsql(Postgres: any): Promise<any> {
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
