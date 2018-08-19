import * as request from "superagent";
import { SwaggerInlineType23,SwaggerInlineType24,SwaggerInlineType25 } from "../types/api.export"


export class SignalsHttpSvc {

    public updateSignal( source:string , id:string , delivery_start:Date , delivery_end:Date , value:any ):Promise<void>{
        const params = { 
            "source":source,
            "id":id,
            "delivery_start":delivery_start,
            "delivery_end":delivery_end 
        };
        return new Promise<void>((resolve, reject) => {
            request
            .post("/signals/{source}/{id}")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }    
    public getSignals( offset:number , limit:number , received_from:Date , received_to:Date ):Promise<Array<SwaggerInlineType23>>{
        const params = { 
            "offset":offset,
            "limit":limit,
            "received_from":received_from,
            "received_to":received_to 
        };
        return new Promise<Array<SwaggerInlineType23>>((resolve, reject) => {
            request
            .get("/signals")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType23>);
                }
            });
        });
    }    
    public updateSignals( value:Array<SwaggerInlineType25> ):Promise<Array<SwaggerInlineType24>>{
        return new Promise<Array<SwaggerInlineType24>>((resolve, reject) => {
            request
            .post("/signals")
            .send(value)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType24>);
                }
            });
        });
    }    
}



