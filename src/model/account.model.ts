import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AccountEntity } from "../entity/account";
import * as CryptoJS from 'crypto-js/sha256';


export class AccountModel{

    public async createAccount(req : Request, res : Response) : Promise<Response>{

        let cek = await getRepository(AccountEntity).findOne({phone : req.body.phone});
        if(!cek){
            
        
        let encrypt_aes = CryptoJS.default(req.body.password).toString();

        let body = {
            phone : req.body.phone,
            password : encrypt_aes
        }

        const newAccount = getRepository(AccountEntity).create(body);        
        const result = await getRepository(AccountEntity).save(newAccount);
        return res.status(200).json({message : result, status : "success"});
        }else{
            console.log("CEK ",cek);
            return res.status(200).json({message : 'Data already exist', status : "failed"});
        }
    }
}