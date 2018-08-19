import * as request from "superagent";
import { SwaggerInlineType39,SwaggerInlineType40,SwaggerInlineType41,SwaggerInlineType42,SwaggerInlineType43 } from "../types/api.export"


export class MarketHttpSvc {

    public getStatus():Promise<SwaggerInlineType39>{
        return new Promise<SwaggerInlineType39>((resolve, reject) => {
            request
            .get("/market")
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType39);
                }
            });
        });
    }    
    public login( Credentials:any ):Promise<SwaggerInlineType40>{
        return new Promise<SwaggerInlineType40>((resolve, reject) => {
            request
            .post("/market")
            .send(Credentials)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType40);
                }
            });
        });
    }    
    public logout():Promise<SwaggerInlineType41>{
        return new Promise<SwaggerInlineType41>((resolve, reject) => {
            request
            .delete("/market")
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType41);
                }
            });
        });
    }    
    public setMarketOptions( Credentials:any ):Promise<SwaggerInlineType42>{
        return new Promise<SwaggerInlineType42>((resolve, reject) => {
            request
            .post("/market/options")
            .send(Credentials)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType42);
                }
            });
        });
    }    
    public getNotifications( offset:number , limit:number , severity_at_least:string , from_api_timestamp:Date , to_api_timestamp:Date ):Promise<Array<SwaggerInlineType43>>{
        const params = { 
            "offset":offset,
            "limit":limit,
            "severity_at_least":severity_at_least,
            "from_api_timestamp":from_api_timestamp,
            "to_api_timestamp":to_api_timestamp 
        };
        return new Promise<Array<SwaggerInlineType43>>((resolve, reject) => {
            request
            .get("/market/notifications")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType43>);
                }
            });
        });
    }    
}



