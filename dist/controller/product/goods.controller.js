"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoodsController = void 0;
const add_dto_1 = require("../../dto/goods/add.dto");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const goods_model_1 = require("../../model/product/goods.model");
class GoodsController {
    goodsAddController(req, res) {
        const model = new goods_model_1.GoodsModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, add_dto_1.AddGoodsDto, res, req);
        if (output) {
            return output;
        }
        return model.AddGoods(req.body, res);
    }
    goodsSelectController(req, res) {
        const model = new goods_model_1.GoodsModel;
        return model.SelectGoods(req.body, res);
    }
}
exports.GoodsController = GoodsController;
