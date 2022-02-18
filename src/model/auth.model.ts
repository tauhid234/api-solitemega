import { Request, Response } from "express";
import * as CryptoJS from 'crypto-js/sha256';
import { getRepository } from "typeorm";
import { Account } from "../entity/account";


export class AuthModel{

    public async Login(req : Request, res : Response){

        let verify_pw = CryptoJS.default(req.body.password).toString();
        let body = {
            phone : req.body.phone,
            password : verify_pw
        }
        let cek = await getRepository(Account).findOne(body);
        if(!cek){
            return res.status(404).json({message : 'Phone or Password is WRONG !', status : "failed"});
        }else{
            return res.status(200).json({message : "You're Logged in", status : "success"});
        }
    }
}