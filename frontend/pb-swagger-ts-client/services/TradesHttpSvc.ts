import * as request from "superagent";
import { SwaggerInlineType26,SwaggerInlineType27 } from "../types/api.export"


export class TradesHttpSvc {

    public getTrades( offset:number , limit:number , ordId:number , active_only:boolean , clOrdrId:string , txt:string , contract_id:number , from_api_timestamp:Date , to_api_timestamp:Date , delivery_within_start:Date , delivery_within_end:Date ):Promise<Array<SwaggerInlineType26>>{
        const params = { 
            "offset":offset,
            "limit":limit,
            "ordId":ordId,
            "active_only":active_only,
            "clOrdrId":clOrdrId,
            "txt":txt,
            "contract_id":contract_id,
            "from_api_timestamp":from_api_timestamp,
            "to_api_timestamp":to_api_timestamp,
            "delivery_within_start":delivery_within_start,
            "delivery_within_end":delivery_within_end 
        };
        return new Promise<Array<SwaggerInlineType26>>((resolve, reject) => {
            request
            .get("/trades")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType26>);
                }
            });
        });
    }    
    public recallTrade( trade_id:number ):Promise<Array<SwaggerInlineType27>>{
        const params = { 
            "trade_id":trade_id 
        };
        return new Promise<Array<SwaggerInlineType27>>((resolve, reject) => {
            request
            .delete("/trade/{trade_id}")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType27>);
                }
            });
        });
    }    
}



