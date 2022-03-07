import { Request, Response } from "express";
import { UserAdminAddDto } from "../../dto/admin/add.dto";
import { UserAdminDeleteDto } from "../../dto/admin/delete.dto";
import { UserAdminUpdateDto } from "../../dto/admin/update.dto";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { MessageUtil } from "../../lib/util/message.util";
import { UserAdminModel } from "../../model/admin/user_admin.model";



export class UserAdminController{

    public UserAdminAddController(req : Request, res : Response){

        const model = new UserAdminModel;
        let validate = new ValidateBodyHelper;
        let validate_body = validate.validate(req.body, UserAdminAddDto, res, req);
        if(validate_body){
            return validate_body;
        }

        let condition_phone = /^\d+$/;
        let condition_pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

        if(req.body.phone.length > 16){
            return res.status(406).send(MessageUtil.failed("Max length phone is 16", 406));
        }

        if(!req.body.password.match(condition_pw)){
            return res.status(406).send(MessageUtil.failed("Required min.1 uppercase letter, min.1 lowercase letter, min.1 symbol, min.1 number, min.8 character", 406));
        }

        if(!req.body.phone.match(condition_phone)){
            return res.status(406).send(MessageUtil.failed("Phone only number", 406));
        }

        return model.AddUserAdmin(req.body, res);
    }
    
    public UserAdminUpdateController(req : Request, res : Response){

        const model = new UserAdminModel;
        let validate = new ValidateBodyHelper;
        let validate_body = validate.validate(req.body, UserAdminUpdateDto, res, req);
        if(validate_body){
            return validate_body;
        }

        return model.UpdateUserAdmin(req.body, res);
    }

    public UserAdminSelectController(req : Request, res : Response){

        const model = new UserAdminModel;
        return model.SelectUserAdmin(req.body, res);

    }

    public UserAdminDeleteController(req : Request, res : Response){

        const model = new UserAdminModel;
        let validate = new ValidateBodyHelper;
        let validate_body = validate.validate(req.body, UserAdminDeleteDto, res, req);
        if(validate_body){
            return validate_body;
        }

        return model.DeleteUserAdmin(req.body, res);
    }

}