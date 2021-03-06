import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { UpdateStatusPerkawinanDto } from "../../dto/status-perkawinan/update.dto";
import { StatusPerkawinan } from "../../entity/parameter/status-perkawinan.entity";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { MessageUtil } from "../../lib/util/message.util";
import { StatusPerkawinanModel } from "../../model/parameter/status-perkawinan.model";



export class StatusPerkawinanController{

    public statusPerkawinanAddController(req : Request, res: Response){

        const model = new StatusPerkawinanModel;

        const prop = getConnection().getMetadata(StatusPerkawinan).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        const req_body = req.body;


        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if(output){
            return output;
        }

        return model.AddStatusPerkawinan(req_body, res);
    }

    public statusPerkawinanUpdateController(req : Request, res : Response){
        const model = new StatusPerkawinanModel;

        if(!req.body.id){
            return res.status(400).send(MessageUtil.failed("Field ID is required for update data", 400));
        }

        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, UpdateStatusPerkawinanDto, res, req);

        if(output){
            return output;
        }

        return model.UpdateStatusPerkawinan(req.body, res);
    }

    public statusPerkawinanSelectAllController(req : Request, res : Response){
        const model = new StatusPerkawinanModel;
        return model.SelectAllStatusPerkawinan(req, res);
    }

    public statusPerkawinanDeleteController(req : Request, res : Response){
        const model = new StatusPerkawinanModel;
        
        if(!req.body.id){
            return res.status(400).send(MessageUtil.failed("Field ID is required for delete data", 400));
        }

        return model.DeleteStatusPerkawinan(req.body, res);
    }
}