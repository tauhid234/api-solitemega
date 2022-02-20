"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
const typeorm_1 = require("typeorm");
const validate_body_helper_1 = require("../lib/helper/validate_body.helper");
const account_entity_1 = require("../entity/account.entity");
const account_model_1 = require("../model/account.model");
const message_util_1 = require("../lib/util/message.util");
class AccountController {
    createAccount(req, res) {
        const model = new account_model_1.AccountModel;
        const message = new message_util_1.MessageUtil;
        const prop = (0, typeorm_1.getConnection)().getMetadata(account_entity_1.AccountEntity).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);
        const req_body = req.body;
        let condition_phone = /^\d+$/;
        let condition_pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req);
        if (output) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Required field body " + output, 400));
        }
        if (req_body.phone.length > 16) {
            return res.status(406).send(message_util_1.MessageUtil.failed("Max length phone is 16", 406));
        }
        if (!req_body.password.match(condition_pw)) {
            return res.status(406).send(message_util_1.MessageUtil.failed("Required min.1 uppercase letter, min.1 lowercase letter, min.1 symbol, min.1 number, min.8 character", 406));
        }
        if (!req_body.phone.match(condition_phone)) {
            return res.status(406).send(message_util_1.MessageUtil.failed("Required only number", 406));
        }
        return model.createAccount(req, res);
    }
}
exports.AccountController = AccountController;
