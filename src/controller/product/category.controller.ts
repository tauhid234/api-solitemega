import { Request, Response } from "express";
import { getConnection } from "typeorm";
import { Category } from "../../entity/product/category.entity";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { MessageUtil } from "../../lib/util/message.util";
import { CategoryModel } from "../../model/product/category.model";


export class CategoryController{
    public categoryAddController(req : Request, res: Response){

        const model = new CategoryModel;

        const prop = getConnection().getMetadata(Category).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        const req_body = req.body;


        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if(output){
            return output;
        }

        return model.AddCategory(req_body, res);
    }

    public categoryUpdateController(req : Request, res : Response){

        if(!req.body.id){
            return res.status(400).send(MessageUtil.failed("Field ID is required for update data", 400));
        }

        const model = new CategoryModel;

        const prop = getConnection().getMetadata(Category).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);

        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if(output){
            return output;
        }

        if(output){
            return res.status(400).send(MessageUtil.failed("Field "+output+" is required for update data", 400));
        }

        return model.UpdateCategory(req.body, res);
    }

    public categorySelectAllController(req : Request, res : Response){
        const model = new CategoryModel;
        return model.SelectAllCategory(req, res);
    }

    public categoryDeleteController(req : Request, res : Response){
        const model = new CategoryModel;
        
        if(!req.body.id){
            return res.status(400).send(MessageUtil.failed("Field ID is required for delete data", 400));
        }

        return model.DeleteCategory(req.body, res);
    }
}