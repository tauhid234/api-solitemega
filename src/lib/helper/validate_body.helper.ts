import { Request, Response} from "express";



export class ValidateBodyHelper{

    public validateEntity(slice : any, req : Request){

        for(let i = 0; i < Object.keys(slice).length; i++){
            let s = slice[i].valueOf();
            let bodys = Object.keys(req.body);
            if(bodys[i] != s){
                return s;
            }
        }

    }

    public validate<T>(source : any, type : {new() : T})
    {
        let obj = new type();

        for(let key in obj)
        {
            if(!source.hasOwnProperty(key))
            {
                return key;
            }
        }
    }
}