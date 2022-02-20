import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { AccountEntity } from "../entity/account.entity";
import { ValidateBodyHelper } from "../lib/helper/validate_body.helper";
import { AuthModel } from "../model/auth.model";



export class AuthController{

    public LoginController(req : Request, res : Response){
        const model = new AuthModel;
        const prop = getConnection().getMetadata(AccountEntity).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        const req_body = req.body;

        let condition_phone = /^\d+$/;

        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if(output){
            return output;
        }

        if(!req_body.phone.match(condition_phone)){
            return res.status(406).json({message : 'Required only number'});
        }

        
        return model.Login(req,res);
    }
}