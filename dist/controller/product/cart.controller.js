"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartController = void 0;
const add_dto_1 = require("../../dto/cart/add.dto");
const delete_dto_1 = require("../../dto/cart/delete.dto");
const select_dto_1 = require("../../dto/cart/select.dto");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const cart_model_1 = require("../../model/product/cart.model");
class CartController {
    cartAddController(req, res) {
        const model = new cart_model_1.CartModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, add_dto_1.AddCartDto, res, req);
        if (output) {
            return output;
        }
        return model.AddCart(req.body, res);
    }
    cartSelectController(req, res) {
        const model = new cart_model_1.CartModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, select_dto_1.SelectCartDto, res, req);
        if (output) {
            return output;
        }
        return model.SelectCart(req.body, res);
    }
    cartDeleteController(req, res) {
        const model = new cart_model_1.CartModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, delete_dto_1.DeleteCartDto, res, req);
        if (output) {
            return output;
        }
        return model.DeleteCart(req.body, res);
    }
}
exports.CartController = CartController;
