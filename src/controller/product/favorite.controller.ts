import { Request, Response } from "express";
import { FavoirteAddDto } from "../../dto/favorite/add.dto";
import { FavoriteDeleteDto } from "../../dto/favorite/delete.dto";
import { FavoriteSelectDto } from "../../dto/favorite/select.dto";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { FavoriteModel } from "../../model/product/favorite.model";



export class FavoriteController{

    public FavoriteAddController(req : Request, res : Response){

        const model = new FavoriteModel;
        let validate = new ValidateBodyHelper;
        let validate_body = validate.validate(req.body, FavoirteAddDto, res, req);
        if(validate_body){
            return validate_body;
        }

        return model.AddFavorite(req.body, res);
    }

    public FavoriteSelectController(req : Request, res : Response){

        const model = new FavoriteModel;
        let validate = new ValidateBodyHelper;
        let validate_body = validate.validate(req.body, FavoriteSelectDto, res, req);
        if(validate_body){
            return validate_body;
        }

        return model.SelectFaovrite(req.body, res);
    }

    public FavoriteDeleteController(req : Request, res : Response){

        const model = new FavoriteModel;
        let validate = new ValidateBodyHelper;
        let validate_body = validate.validate(req.body, FavoriteDeleteDto, res, req);
        if(validate_body){
            return validate_body;
        }

        return model.DeleteFaovrite(req.body, res);
    }
}