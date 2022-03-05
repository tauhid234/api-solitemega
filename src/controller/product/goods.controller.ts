import { Request, Response } from "express";
import { AddGoodsDto } from "../../dto/goods/add.dto";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { GoodsModel } from "../../model/product/goods.model";



export class GoodsController{


    public goodsAddController(req : Request, res : Response){

        const model = new GoodsModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, AddGoodsDto, res, req);
        if(output){
            return output;
        }

        return model.AddGoods(req.body, res);
    }

    public goodsSelectController(req : Request, res : Response){
        const model = new GoodsModel;
        return model.SelectGoods(req.body, res);
    }
}