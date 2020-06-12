import { Client } from "https://deno.land/x/mysql/mod.ts";
import { mysql } from "../../../config/database.ts";

export async function connectMysql(Mysql: mysql): Promise<Client>{
   const client = await new Client().connect({
     hostname: Mysql.hostname,
     username: Mysql.username,
     db: Mysql.db,
     password: Mysql.password,
     port: Mysql.port,
   });

   let db = await client;
   
   return db;
}
