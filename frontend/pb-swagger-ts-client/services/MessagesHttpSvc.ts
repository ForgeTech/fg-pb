import * as request from "superagent";
import { SwaggerInlineType44 } from "../types/api.export"


export class MessagesHttpSvc {

    public getMessages( offset:number , limit:number , from_api_timestamp:Date , to_api_timestamp:Date , message_class_is:string , message_class_is_not:string , correlation_id:string , sort_by:string ):Promise<Array<SwaggerInlineType44>>{
        const params = { 
            "offset":offset,
            "limit":limit,
            "from_api_timestamp":from_api_timestamp,
            "to_api_timestamp":to_api_timestamp,
            "message_class_is":message_class_is,
            "message_class_is_not":message_class_is_not,
            "correlation_id":correlation_id,
            "sort_by":sort_by 
        };
        return new Promise<Array<SwaggerInlineType44>>((resolve, reject) => {
            request
            .get("/messages")
            .query(params)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as Array<SwaggerInlineType44>);
                }
            });
        });
    }    
}



