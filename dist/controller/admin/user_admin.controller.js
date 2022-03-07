"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAdminController = void 0;
const add_dto_1 = require("../../dto/admin/add.dto");
const delete_dto_1 = require("../../dto/admin/delete.dto");
const update_dto_1 = require("../../dto/admin/update.dto");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const message_util_1 = require("../../lib/util/message.util");
const user_admin_model_1 = require("../../model/admin/user_admin.model");
class UserAdminController {
    UserAdminAddController(req, res) {
        const model = new user_admin_model_1.UserAdminModel;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let validate_body = validate.validate(req.body, add_dto_1.UserAdminAddDto, res, req);
        if (validate_body) {
            return validate_body;
        }
        let condition_phone = /^\d+$/;
        let condition_pw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
        if (req.body.phone.length > 16) {
            return res.status(406).send(message_util_1.MessageUtil.failed("Max length phone is 16", 406));
        }
        if (!req.body.password.match(condition_pw)) {
            return res.status(406).send(message_util_1.MessageUtil.failed("Required min.1 uppercase letter, min.1 lowercase letter, min.1 symbol, min.1 number, min.8 character", 406));
        }
        if (!req.body.phone.match(condition_phone)) {
            return res.status(406).send(message_util_1.MessageUtil.failed("Phone only number", 406));
        }
        return model.AddUserAdmin(req.body, res);
    }
    UserAdminUpdateController(req, res) {
        const model = new user_admin_model_1.UserAdminModel;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let validate_body = validate.validate(req.body, update_dto_1.UserAdminUpdateDto, res, req);
        if (validate_body) {
            return validate_body;
        }
        return model.UpdateUserAdmin(req.body, res);
    }
    UserAdminSelectController(req, res) {
        const model = new user_admin_model_1.UserAdminModel;
        return model.SelectUserAdmin(req.body, res);
    }
    UserAdminDeleteController(req, res) {
        const model = new user_admin_model_1.UserAdminModel;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let validate_body = validate.validate(req.body, delete_dto_1.UserAdminDeleteDto, res, req);
        if (validate_body) {
            return validate_body;
        }
        return model.DeleteUserAdmin(req.body, res);
    }
}
exports.UserAdminController = UserAdminController;
