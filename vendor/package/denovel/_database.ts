import { Mongo,Postgres,Mysql,Connection } from "../../../config/database.ts";
import { connectMongo,connectPgsql,connectMysql } from "./drivers/index.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

async function driver(Connection: string): Promise<any>{
    if(Connection === 'pgsql'){
        return await connectPgsql(Postgres);
    }else if(Connection === 'mongod'){
        return await connectMongo(Mongo);
    }
}

export const database = await driver(Connection);