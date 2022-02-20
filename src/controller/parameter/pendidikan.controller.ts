import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { UpdatePendidikanDto } from "../../dto/pendidikan/update.dto";
import { Pendidikan } from "../../entity/parameter/pendidikan.entity";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { MessageUtil } from "../../lib/util/message.util";
import { PendidikanModel } from "../../model/parameter/pendidikan.model";



export class PendidikanController{

    public pendidikanAddController(req : Request, res: Response){

        const model = new PendidikanModel;

        const prop = getConnection().getMetadata(Pendidikan).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        const req_body = req.body;


        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if(output){
            return output;
        }

        return model.AddPendidikan(req_body, res);
    }

    public pendidikanUpdateController(req : Request, res : Response){
        const model = new PendidikanModel;

        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, UpdatePendidikanDto);

        if(output){
            return res.status(400).send(MessageUtil.failed("Field "+output+" is required for update data", 400));
        }

        return model.UpdatePendidikan(req.body, res);
    }

    public pendidikanSelectAllController(req : Request, res : Response){
        const model = new PendidikanModel;
        return model.SelectAllPendidikan(req, res);
    }

    public pendidikanDeleteController(req : Request, res : Response){
        const model = new PendidikanModel;
        
        if(!req.body.id){
            return res.status(400).send(MessageUtil.failed("Field ID is required for delete data", 400));
        }

        return model.DeletePendidikan(req.body, res);
    }
}