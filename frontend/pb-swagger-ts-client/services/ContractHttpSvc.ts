import * as request from "superagent";
import { SwaggerInlineType32,SwaggerInlineType33,SwaggerInlineType34,SwaggerInlineType35 } from "../types/api.export"


export class ContractHttpSvc {

    public getContractHistory( contract_id:number , from_revision:number ):Promise<Array<SwaggerInlineType32>>{
        const params = { 
            "contract_id":contract_id,
            "from_revision":from_revision 
        };
        return new Promise<Array<SwaggerInlineType32>>((resolve, reject) => {
            request
            .get("/contract/{contract_id}/history")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType32>);
                }
            });
        });
    }    
    public getPublicTrades( offset:number , limit:number , contract_id:number , from_api_timestamp:Date , to_api_timestamp:Date ):Promise<Array<SwaggerInlineType33>>{
        const params = { 
            "offset":offset,
            "limit":limit,
            "contract_id":contract_id,
            "from_api_timestamp":from_api_timestamp,
            "to_api_timestamp":to_api_timestamp 
        };
        return new Promise<Array<SwaggerInlineType33>>((resolve, reject) => {
            request
            .get("/contract/{contract_id}/publictrades")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType33>);
                }
            });
        });
    }    
    public getOrders( contract_id:number ):Promise<SwaggerInlineType34>{
        const params = { 
            "contract_id":contract_id 
        };
        return new Promise<SwaggerInlineType34>((resolve, reject) => {
            request
            .get("/contract/{contract_id}/orders")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType34);
                }
            });
        });
    }    
    public findContracts( contract_id:number , delivery_start:Date , delivery_end:Date ):Promise<Array<SwaggerInlineType35>>{
        const params = { 
            "contract_id":contract_id,
            "delivery_start":delivery_start,
            "delivery_end":delivery_end 
        };
        return new Promise<Array<SwaggerInlineType35>>((resolve, reject) => {
            request
            .get("/contracts")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType35>);
                }
            });
        });
    }    
}



