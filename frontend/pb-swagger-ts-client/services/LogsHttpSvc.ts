import * as request from "superagent";
import { SwaggerInlineType22 } from "../types/api.export"


export class LogsHttpSvc {

    public getLogs( offset:number , limit:number , severity_at_least:string , received_from:Date , received_to:Date ):Promise<Array<SwaggerInlineType22>>{
        const params = { 
            "offset":offset,
            "limit":limit,
            "severity_at_least":severity_at_least,
            "received_from":received_from,
            "received_to":received_to 
        };
        return new Promise<Array<SwaggerInlineType22>>((resolve, reject) => {
            request
            .get("/logs")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType22>);
                }
            });
        });
    }    
    public addLogEntry( value:any ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            request
            .post("/logs")
            .send(value)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }    
}



