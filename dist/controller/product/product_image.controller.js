"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImageController = void 0;
const add_dto_1 = require("../../dto/product_image/add.dto");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const product_image_model_1 = require("../../model/product/product_image.model");
class ProductImageController {
    productImageAddController(req, res) {
        var _a;
        const model = new product_image_model_1.ProductImageModel;
        let t = (_a = req.files) === null || _a === void 0 ? void 0 : _a.files;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate.validate(req.body, add_dto_1.AddProductImageDto, res, req);
        if (output) {
            return output;
        }
        return model.AddProductImage(req, res);
    }
}
exports.ProductImageController = ProductImageController;
