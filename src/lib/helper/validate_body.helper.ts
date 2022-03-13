import { Request, Response} from "express";
import { MessageUtil } from "../util/message.util";



export class ValidateBodyHelper{

    public validateEntity(slice : any, req : Request, res : Response){
    
        let path = req.path;
        let end_path = path.split("/");
        console.log(req.body);

        for(let i = 0; i < Object.keys(slice).length; i++){
            let s = slice[i].valueOf();
            let bodys = Object.keys(req.body);
            if(bodys[i] != s){
                
                return res.status(400).send(MessageUtil.failed("Field "+s+" is required for "+end_path[3]+" data", 400));
            }
        }

    }

    public validate<T>(source : any, type : {new() : T}, res : Response, req : Request)
    {
        let obj = new type();
        let path = req.path;
        let end_path = path.split("/");

        for(let key in obj)
        {
            if(!source.hasOwnProperty(key))
            {
                return res.status(400).send(MessageUtil.failed("Field "+key+" is required for "+end_path[3]+" data", 400));
            }
        }
    }
}