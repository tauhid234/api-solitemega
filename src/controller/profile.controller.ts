import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Profile } from "../entity/profile.entity";
import { ValidateBodyHelper } from "../lib/helper/validate_body.helper";
import { MessageUtil } from "../lib/util/message.util";
import { ProfileModel } from "../model/profile.model";


export class ProfileController{

    
    public createProfile(req : Request, res : Response){
        const model = new ProfileModel;
        const message = new MessageUtil;

        const prop = getConnection().getMetadata(Profile).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);
        
        let regex_mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if(output){
            return output;
        }

        if(!req.body.email.match(regex_mail)){
            return res.status(400).send(MessageUtil.failed("Email is Not Valid", 400));
        }

        
        return model.createProfile(req,res);
    }

    public SelectProfileController(req : Request, res : Response){

        const model = new ProfileModel;
        return model.SelectProfile(req.body, res);

    }
}