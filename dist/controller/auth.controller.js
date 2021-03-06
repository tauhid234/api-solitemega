"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../entity/account.entity");
const validate_body_helper_1 = require("../lib/helper/validate_body.helper");
const auth_model_1 = require("../model/auth.model");
class AuthController {
    LoginController(req, res) {
        const model = new auth_model_1.AuthModel;
        const prop = (0, typeorm_1.getConnection)().getMetadata(account_entity_1.AccountEntity).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);
        const req_body = req.body;
        let condition_phone = /^\d+$/;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if (output) {
            return output;
        }
        if (!req_body.phone.match(condition_phone)) {
            return res.status(406).json({ message: 'Required only number' });
        }
        return model.Login(req, res);
    }
}
exports.AuthController = AuthController;
