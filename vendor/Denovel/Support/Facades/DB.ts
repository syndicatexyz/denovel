import { 
	Mongo,
	Postgres,
	Connection 
} from "../../../../config/database.ts";
import { 
	connectMongo,
	connectPgsql,
} from "../../drivers/mod.ts";
import { 
	Client as PgsqlClient 
} from "https://deno.land/x/postgres/mod.ts";
import { 
	Database as MongodClient 
} from "https://deno.land/x/mongo@v0.6.0/mod.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

async function driver(Connection: string): Promise<PgsqlClient | MongodClient | undefined>{
    if(Connection === 'pgsql'){
        return connectPgsql(Postgres);
    } else if(Connection === 'mongod'){
        return connectMongo(Mongo);
    }
}

export const database = await driver(Connection) as any;