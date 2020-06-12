/**
 * Denovel - A Deno Framework for Web Artisan
 *
 * @package  Denovel
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export class Foundation {
	container: Array<object> = []
	service: any = {}

	bind(value: any): void{
		let key = typeof value === "function" ? value.name : value.constructor.name;
		this.container.push({ key,value,type: "bind" }); 
	}

	singleton(value: any): void{
		let key = typeof value === "function" ? value.name : value.constructor.name;
		this.container.push({ key,value,type: "singleton" }); 
	}

	make(key: string){
		this.service = this.container.find((obj: any) => obj.key === key);
		if(typeof this.service === 'undefined') return null;

		if(this.service.type === "singleton"){
            return Object.assign(
                Object.create( Object.getPrototypeOf(this.service.value)),
                this.isFunction(this.service.value)
            );
		}else{
			return this.isFunction(this.service.value);
		}	
	}

	isFunction(value: any){
		return typeof value === 'function' ? value() : value;
	}
}