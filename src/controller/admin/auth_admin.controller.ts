import { Request, Response } from "express";
import { MessageUtil } from "../../lib/util/message.util";
import { AuthAdminModel } from "../../model/admin/auth_admin.model";



export class AuthAdminController{

    public AuthAdminLogin(req : Request, res : Response){

        const model = new AuthAdminModel;
        let username = req.body.username;
        let password = req.body.password;

        if(username == null || username == "" || username == undefined){
            return res.status(400).send(MessageUtil.failed("Username is Required", 400));
        }

        if(password == null || password == "" || password == undefined){
            return res.status(400).send(MessageUtil.failed("Password is Required", 400));
        }

        let obj = req.body;
        return model.Login(obj, res);

    }
}