import { database } from '../../vendor/Denovel/Support/Facades/DB.ts';
import * as dejs from 'https://deno.land/x/dejs@0.6.0/mod.ts';
import { RouterContext } from "../../vendor/Denovel/Support/Facades/Request.ts";


export class HomeController {
    /**
     * Get the input of get function
     * @param {Context}
     * @return {Context} abstract of get function
     */

    async get({request,response,params}: RouterContext){
        response.body = "Denovel"
    }  

    /**
     * Post the input of post function
     * @param {Context}
     * @return {Context} abstract of post function
     */

    async post({request,response,params}: RouterContext){

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
}