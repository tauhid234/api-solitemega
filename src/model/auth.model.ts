import { Request, Response } from "express";
import * as CryptoJS from 'crypto-js/sha256';
import { getRepository } from "typeorm";
import { AccountEntity } from "../entity/account.entity";
import { MessageUtil } from "../lib/util/message.util";


export class AuthModel{

    public async Login(req : Request, res : Response){

        let verify_pw = CryptoJS.default(req.body.password).toString();
        let body = {
            phone : req.body.phone,
            password : verify_pw
        }
        let cek = await getRepository(AccountEntity).findOne(body);
        if(!cek){
            return res.status(404).send(MessageUtil.failed("Phone Or Password is Worng", 404));
        }else{
            let data_login = {
                id_user : cek.id
            }
            return res.status(200).send(MessageUtil.success("You're logged in", data_login));
        }
    }
}