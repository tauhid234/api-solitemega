import { Response } from "express";
import { getRepository } from "typeorm";
import { UserAdmin } from "../../entity/admin/user_admin.entity";

import * as CryptoJS from 'crypto-js/sha256';
import { MessageUtil } from "../../lib/util/message.util";

export class AuthAdminModel{

    public async Login(body : any, res : Response){

        let decrypt = CryptoJS.default(body.password).toString();
        let data = {
            username : body.username,
            password : decrypt
        }

        let cek_valid = await getRepository(UserAdmin).findOne(data);
        if(!cek_valid){
            return res.status(404).send(MessageUtil.failed("Username Or Password is Wrong", 404));
        }

        return res.status(200).send(MessageUtil.success("You're Logged in Role Admin", cek_valid));
    }
}