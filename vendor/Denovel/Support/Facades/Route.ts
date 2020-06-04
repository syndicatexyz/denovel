import { 
	Context,
	Router, 
	RouterContext,
	RouterMiddleware
} from "./Request.ts";

/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

const router = new Router();
const rootPath = Deno.cwd() + '/app/Controllers/';

class Routes {
	grouproutes: Array<object> = []

	async get(url: string, callback: ((context: RouterContext) => void) | string){
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				router.get(url,responseController);	
			}else{
				router.get(url,(context: Context) => {
					context.response.body = responseController;
				});
			}
		}else{
			this.View(url,"get",callback);
		}
	}

	async post(url: string, callback: ((context: RouterContext) => void) | string){
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				router.post(url,responseController);	
			}else{
				router.post(url,(context: Context) => {
					context.response.body = responseController;
				});
			}
		}else{
			this.View(url,"post",callback);
		}
	}

	async put(url: string, callback: ((context: RouterContext) => void) | string){
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				router.put(url,responseController);	
			}else{
				router.put(url,(context: Context) => {
					context.response.body = responseController;
				});
			}
		}else{
			this.View(url,"put",callback);
		}
	}
  
	async delete(url: string, callback: ((context: RouterContext) => void) | string){
		if(typeof callback === "string"){
			let responseController = await this.Controller(callback);

			if(typeof responseController === "function"){
				router.put(url,responseController);	
			}else{
				router.put(url,(context: Context) => {
					context.response.body = responseController;
				});
			}
		}else{
			this.View(url,"put",callback);
		}
	}

	async Controller (path: string){
		let controllerName = path.split("@")[0];
		let methodName = path.split("@")[1];
		let filePath = rootPath + controllerName + '.ts';

        let checkFile = await this.exists(filePath);
        if (checkFile) {
	        let importedController = await import('file:///' + filePath);

	        let controller = new importedController[controllerName]();
	        
	        return controller[methodName];
        }else{
        	return "Server Error";
        }
	}

	View (url: string, method: string, callback: any){
		if(method == "get"){
			router.get(url,(context: RouterContext) => {
				let content = callback(context);
				if(this.isPromise(content)){
					content.then((result: any) => {
						if(typeof result !== "undefined"){
							context.response.body = result;
						}else{
							callback(context);
						}							
					})
				}else{
					if(typeof content !== "undefined"){
						context.response.body = content;
					}else{
						callback(context);
					}					
				}
			});
		}else if(method == "post"){
			router.post(url,(context: RouterContext) => {
				let content = callback(context);
				if(this.isPromise(content)){
					content.then((result: any) => {
						if(typeof result !== "undefined"){
							context.response.body = result;
						}else{
							callback(context);
						}							
					})
				}else{
					if(typeof content !== "undefined"){
						context.response.body = content;
					}else{
						callback(context);
					}					
				}
			});
		}else if(method == "put"){
			router.put(url,(context: RouterContext) => {
				let content = callback(context);
				if(this.isPromise(content)){
					content.then((result: any) => {
						if(typeof result !== "undefined"){
							context.response.body = result;
						}else{
							callback(context);
						}							
					})
				}else{
					if(typeof content !== "undefined"){
						context.response.body = content;
					}else{
						callback(context);
					}					
				}
			});
		}else if(method == "delete"){
			router.delete(url,(context: RouterContext) => {
				let content = callback(context);
				if(this.isPromise(content)){
					content.then((result: any) => {
						if(typeof result !== "undefined"){
							context.response.body = result;
						}else{
							callback(context);
						}							
					})
				}else{
					if(typeof content !== "undefined"){
						context.response.body = content;
					}else{
						callback(context);
					}					
				}
			});		
		}	
	}

	async exists (filename: string): Promise<boolean> {
	  try {
	    await Deno.stat(filename);
	    // successful, file or directory must exist
	    return true;
	  } catch (error) {
	    if (error instanceof Deno.errors.NotFound) {
	      // file or directory does not exist
	      return false;
	    } else {
	      // unexpected error, maybe permissions, pass it along
	      throw error;
	    }
	  }
	}

	isPromise(object: any){
	  if(Promise && Promise.resolve){
	    return Promise.resolve(object) == object;
	  }else{
	    throw "Promise not supported in your environment"
	  }
	}

	group(args: object,route: object){
		this.grouproutes.push({
			args: args,
			route: route
		});	

		console.log(this.grouproutes);		
	}
}

const Route = new Routes();

export {
	router,
	Route
}