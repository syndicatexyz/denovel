import { 
	Router, 
	RouterContext,
	Response
} from "https://deno.land/x/oak/mod.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

const router = new Router();

class Routes {
	get(url: string, callback: ((context: RouterContext) => void) | string){
		if(typeof callback === "string"){
			let controllerName = callback.split("@")[0];
			let methodName = callback.split("@")[1];
			let filePath = "../../../../app/Controllers/" + controllerName + ".ts";

			import(filePath).then(obj => {
				let controller = new obj[controllerName]();
				router.get(url,controller[methodName]);
			});
		}else{
			router.get(url,callback);
		}
	}

	post(url: string, callback: ((context: RouterContext) => void) | string){


		if(typeof callback === "string"){
			
		}else{
			router.get(url,callback);
		}
	}

	put(url: string, callback: ((context: RouterContext) => void) | string){


		if(typeof callback === "string"){

		}else{
			router.get(url,callback);
		}
	}
  
	delete(url: string, callback: ((context: RouterContext) => void) | string){


		if(typeof callback === "string"){

		}else{
			router.get(url,callback);
		}
	}
}

const Route = new Routes();

export {
	router,
	Route
}