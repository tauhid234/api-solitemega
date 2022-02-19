import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { ValidateBodyHelper } from "../lib/helper/validate_body.helper";
import { AccountEntity } from "../entity/account.entity";
import { AccountModel } from "../model/account.model";
import { MessageUtil } from "../lib/util/message.util";


export class AccountController{

    
    public createAccount(req : Request, res : Response){
        const model = new AccountModel;
        const message = new MessageUtil;

        const prop = getConnection().getMetadata(AccountEntity).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        const req_body = req.body;

        let condition_phone = /^\d+$/;
        let condition_pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validateBodyAdd(slice, req);
        if(output){
            return res.status(400).send(MessageUtil.failed("Required field body "+output, 400));
        }

        if(req_body.phone.length > 16){
            return res.status(406).send(MessageUtil.failed("Max length phone is 16", 406));
        }

        if(!req_body.password.match(condition_pw)){
            return res.status(406).send(MessageUtil.failed("Required min.1 uppercase letter, min.1 lowercase letter, min.1 symbol, min.1 number, min.8 character", 406));
        }

        if(!req_body.phone.match(condition_phone)){
            return res.status(406).send(MessageUtil.failed("Required only number", 406));
        }

        
        return model.createAccount(req,res);
    }
}