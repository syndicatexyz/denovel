/**
 * Template for Controller
 *
 * @package  Denomand
 * @author   Muhammad Fauzan <developerfauzan@asraja.com>
 */

export default function template(name: string): string{

return `import { database } from '../../vendor/Denovel/_database.ts';
import * as dejs from 'https://deno.land/x/dejs@0.6.0/mod.ts';
import { 
    Context, 
    RouterContext
} from "https://deno.land/x/oak/mod.ts";

export class ${name} {

    /**
     * Set the output of index function
     * @param {Context}
     * @return {Context} abstract of index function
     */

    async index(ctx: Context){

    }

    /**
     * Get the input of get function
     * @param {Context}
     * @return {Context} abstract of get function
     */

    async get(ctx: Context){

    }  

    /**
     * Post the input of post function
     * @param {Context}
     * @return {Context} abstract of post function
     */

    async post({request,response}: Context){

    }  

    /**
     * Edit the input of edit function
     * @param {RouterContext}
     * @return {RouterContext} abstract of edit function
     */

    async edit({request,response,params}: RouterContext){
        
    }  

    /**
     * Put the input of put function
     * @param {RouterContext}
     * @return {RouterContext} abstract of put function
     */

    async put({request,response,params}: RouterContext){

    }  

    /**
     * Delete the input of delete function
     * @param {RouterContext}
     * @return {RouterContext} abstract of delete function
     */

    async delete({request,response,params}: RouterContext){

    }  
}`;

}
