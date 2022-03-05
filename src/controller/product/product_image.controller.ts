import { Request, Response } from "express";
import { AddProductImageDto } from "../../dto/product_image/add.dto";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { ProductImageModel } from "../../model/product/product_image.model";


export class ProductImageController{

    public productImageAddController(req : Request, res : Response){
        
        const model = new ProductImageModel;

        let t : any = req.files?.files;
        let validate = new ValidateBodyHelper;
        let output = validate.validate(req.body, AddProductImageDto, res, req);

        if(output){
            return output;
        }

        return model.AddProductImage(req, res);

    }
}