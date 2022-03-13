"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const typeorm_1 = require("typeorm");
const category_dto_1 = require("../../dto/category/category.dto");
const category_entity_1 = require("../../entity/product/category.entity");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const message_util_1 = require("../../lib/util/message.util");
const category_model_1 = require("../../model/product/category.model");
class CategoryController {
    categoryAddController(req, res) {
        const model = new category_model_1.CategoryModel;
        const prop = (0, typeorm_1.getConnection)().getMetadata(category_entity_1.Category).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);
        const req_body = req.body;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if (output) {
            return output;
        }
        return model.AddCategory(req_body, res);
    }
    categoryUpdateController(req, res) {
        if (!req.body.id) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field ID is required for update data", 400));
        }
        const model = new category_model_1.CategoryModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, category_dto_1.UpdateCategoryDto, res, req);
        if (output) {
            return output;
        }
        return model.UpdateCategory(req.body, res);
    }
    categorySelectAllController(req, res) {
        const model = new category_model_1.CategoryModel;
        return model.SelectAllCategory(req, res);
    }
    categoryDeleteController(req, res) {
        const model = new category_model_1.CategoryModel;
        if (!req.body.id) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field ID is required for delete data", 400));
        }
        return model.DeleteCategory(req.body, res);
    }
}
exports.CategoryController = CategoryController;
