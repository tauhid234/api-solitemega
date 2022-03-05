import { Request, Response } from "express";
import { AddCartDto } from "../../dto/cart/add.dto";
import { DeleteCartDto } from "../../dto/cart/delete.dto";
import { SelectCartDto } from "../../dto/cart/select.dto";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { CartModel } from "../../model/product/cart.model";



export class CartController {


    public cartAddController(req : Request, res : Response){
        const model = new CartModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, AddCartDto, res, req);
        if(output){
            return output;
        }

        return model.AddCart(req.body, res);
    }

    public cartSelectController(req : Request, res : Response){
        const model = new CartModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, SelectCartDto, res, req);
        if(output){
            return output;
        }

        return model.SelectCart(req.body, res);
    }

    public cartDeleteController(req : Request, res : Response){
        const model = new CartModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, DeleteCartDto, res, req);
        if(output){
            return output;
        }

        return model.DeleteCart(req.body, res);
    }
}