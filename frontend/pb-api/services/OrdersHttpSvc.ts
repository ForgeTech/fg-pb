import * as request from "superagent";
import { SwaggerInlineType28,SwaggerInlineType29,SwaggerInlineType30,SwaggerInlineType31,SwaggerInlineType36,SwaggerInlineType37,SwaggerInlineType38 } from "../types/api"


export class OrdersHttpSvc {

    public getOwnOrders( offset:number , limit:number , contract_id:number , active_only:boolean ):Promise<Array<SwaggerInlineType28>>{
        const params = { 
            "offset":offset,
            "limit":limit,
            "contract_id":contract_id,
            "active_only":active_only 
        };
        return new Promise<Array<SwaggerInlineType28>>((resolve, reject) => {
            request
            .get("/orders")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType28>);
                }
            });
        });
    }    
    public addOrder( order:any ):Promise<SwaggerInlineType29>{
        return new Promise<SwaggerInlineType29>((resolve, reject) => {
            request
            .post("/orders")
            .send(order)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType29);
                }
            });
        });
    }    
    public addOrders( exec_instruction:string , order:Array<SwaggerInlineType31> ):Promise<Array<SwaggerInlineType30>>{
        const params = { 
            "exec_instruction":exec_instruction 
        };
        return new Promise<Array<SwaggerInlineType30>>((resolve, reject) => {
            request
            .post("/orders/list")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType30>);
                }
            });
        });
    }    
    public updateStatus( orders:any ):Promise<void>{
        return new Promise<void>((resolve, reject) => {
            request
            .put("/orders/status")
            .send(orders)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as void);
                }
            });
        });
    }    
    public modifyOrder( order_id:number , modifications:any ):Promise<Array<SwaggerInlineType36>>{
        const params = { 
            "order_id":order_id 
        };
        return new Promise<Array<SwaggerInlineType36>>((resolve, reject) => {
            request
            .put("/order/{order_id}")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType36>);
                }
            });
        });
    }    
    public getOrderBooks( product:string , with_bid_or_ask_only:boolean , contractId:number , contractName:string , delivery_start:Date , delivery_end:Date , delivery_within:Date , past_hours:number , limit:number ):Promise<SwaggerInlineType37>{
        const params = { 
            "product":product,
            "with_bid_or_ask_only":with_bid_or_ask_only,
            "contractId":contractId,
            "contractName":contractName,
            "delivery_start":delivery_start,
            "delivery_end":delivery_end,
            "delivery_within":delivery_within,
            "past_hours":past_hours,
            "limit":limit 
        };
        return new Promise<SwaggerInlineType37>((resolve, reject) => {
            request
            .get("/orderbooks")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType37);
                }
            });
        });
    }    
    public getOrderBook( product:string , with_bid_or_ask_only:boolean , contractId:number , contractName:string , delivery_start:Date , delivery_end:Date , delivery_within:Date , past_hours:number , limit:number ):Promise<SwaggerInlineType38>{
        const params = { 
            "product":product,
            "with_bid_or_ask_only":with_bid_or_ask_only,
            "contractId":contractId,
            "contractName":contractName,
            "delivery_start":delivery_start,
            "delivery_end":delivery_end,
            "delivery_within":delivery_within,
            "past_hours":past_hours,
            "limit":limit 
        };
        return new Promise<SwaggerInlineType38>((resolve, reject) => {
            request
            .get("/orderbook/{product}")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType38);
                }
            });
        });
    }    
}



