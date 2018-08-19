import * as request from "superagent";
import { SwaggerInlineType21 } from "../types/api"


export class AuthenticationHttpSvc {

    public addApiKey( value:any ):Promise<SwaggerInlineType21>{
        return new Promise<SwaggerInlineType21>((resolve, reject) => {
            request
            .post("/authentication")
            .send(value)
            .end(function(error, res){
                if(error){
                    reject(error);
                }else{
                   resolve(res.body as SwaggerInlineType21);
                }
            });
        });
    }    
}



