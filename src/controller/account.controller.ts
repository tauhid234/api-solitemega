import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Account } from "../entity/account";
import { AccountModel } from "../model/account.model";


export class AccountController{

    
    public createAccount(req : Request, res : Response){
        const model = new AccountModel;
        const prop = getConnection().getMetadata(Account).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        const req_body = req.body;

        let condition_phone = /^\d+$/;
        let condition_pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

        for(let i = 0; i < Object.keys(slice).length; i++){
            let s = slice[i].valueOf();
            let body = Object.keys(req.body);
            if(body[i] != s){
                return res.status(400).json({message : "Required field body "+s});
            }
        }

        if(req_body.phone.length > 16){
            return res.status(406).json({message : "Max length phone is 16"})
        }

        if(!req_body.password.match(condition_pw)){
            return res.status(406).json({message : "Required min.1 uppercase letter, min.1 lowercase letter, min.1 symbol, min.1 number, min.8 character"});
        }

        if(!req_body.phone.match(condition_phone)){
            return res.status(406).json({message : 'Required only number'});
        }

        
        return model.createAccount(req,res);
    }
}