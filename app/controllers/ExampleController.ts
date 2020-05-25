import { database } from '../../vendor/Denovel/Database.ts';
import * as dejs from 'https://deno.land/x/dejs@0.6.0/mod.ts';
import { RouterContext } from "../../vendor/Denovel/Support/Facades/Request.ts";


export class ExampleController {

    /**
     * Get the input of get function
     * @param {Context}
     * @return {Context} abstract of get function
     */

    async get({request,response,params}: RouterContext){
        const denovel = database.collection("denovel");

        const datas = await denovel.find({ example: { $ne: null } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/index.ejs`, { datas });
        response.body = output;
    }  

    /**
     * Post the input of post function
     * @param {Context}
     * @return {Context} abstract of post function
     */

    async post({request,response,params}: RouterContext){
        const body = await request.body();
        const value = body.value.get("example");
        const denovel = database.collection("denovel");
        const data = await denovel.insertOne({
          example: value
        });

        const datas = await denovel.find({ example: { $ne: null } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/index.ejs`, { datas });
        response.body = output;
    }  

    /**
     * Edit the input of edit function
     * @param {RouterContext}
     * @return {RouterContext} abstract of edit function
     */

    async edit({request,response,params}: RouterContext){
        const denovel = database.collection("denovel");
        const datas = await denovel.findOne({ _id: { "$oid": params.id } });
        const output = await dejs.renderFileToString(`${Deno.cwd()}/resources/views/edit.ejs`, { datas });
        response.body = output;        
    }  

    /**
     * Put the input of put function
     * @param {RouterContext}
     * @return {RouterContext} abstract of put function
     */

    async put({request,response,params}: RouterContext){
        const body = await request.body();
        const value = body.value.get("example");
        const denovel = database.collection("denovel");
        const { matchedCount, modifiedCount, upsertedId } = await denovel.updateOne(
          { _id: { "$oid": params.id } },
          { $set: { example: value } }
        );

        response.body = {
            success: true,
            message: "Data updated succesfully!",
            data: params.id,
        }
    }  

    /**
     * Delete the input of delete function
     * @param {RouterContext}
     * @return {RouterContext} abstract of delete function
     */

    async delete({request,response,params}: RouterContext){
        const denovel = database.collection("denovel");   
        await denovel.deleteOne({ _id: { "$oid": params.id} });

        response.body = {
            success: true,
            message: "Data deleted succesfully!",
            data: params.id,
        }
    }  
}