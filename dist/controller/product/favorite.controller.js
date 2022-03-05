"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FavoriteController = void 0;
const add_dto_1 = require("../../dto/favorite/add.dto");
const delete_dto_1 = require("../../dto/favorite/delete.dto");
const select_dto_1 = require("../../dto/favorite/select.dto");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const favorite_model_1 = require("../../model/product/favorite.model");
class FavoriteController {
    FavoriteAddController(req, res) {
        const model = new favorite_model_1.FavoriteModel;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let validate_body = validate.validate(req.body, add_dto_1.FavoirteAddDto, res, req);
        if (validate_body) {
            return validate_body;
        }
        return model.AddFavorite(req.body, res);
    }
    FavoriteSelectController(req, res) {
        const model = new favorite_model_1.FavoriteModel;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let validate_body = validate.validate(req.body, select_dto_1.FavoriteSelectDto, res, req);
        if (validate_body) {
            return validate_body;
        }
        return model.SelectFaovrite(req.body, res);
    }
    FavoriteDeleteController(req, res) {
        const model = new favorite_model_1.FavoriteModel;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let validate_body = validate.validate(req.body, delete_dto_1.FavoriteDeleteDto, res, req);
        if (validate_body) {
            return validate_body;
        }
        return model.DeleteFaovrite(req.body, res);
    }
}
exports.FavoriteController = FavoriteController;
