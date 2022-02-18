import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { AccountEntity } from "../entity/account";
import { AuthModel } from "../model/auth.model";



export class AuthController{

    public LoginController(req : Request, res : Response){
        const model = new AuthModel;
        const prop = getConnection().getMetadata(AccountEntity).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        const req_body = req.body;

        let condition_phone = /^\d+$/;

        for(let i = 0; i < Object.keys(slice).length; i++){
            let s = slice[i].valueOf();
            let body = Object.keys(req.body);
            if(body[i] != s){
                return res.status(400).json({message : "Required field body "+s});
            }
        }

        if(!req_body.phone.match(condition_phone)){
            return res.status(406).json({message : 'Required only number'});
        }

        
        return model.Login(req,res);
    }
}