"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdminController = void 0;
const message_util_1 = require("../../lib/util/message.util");
const auth_admin_model_1 = require("../../model/admin/auth_admin.model");
class AuthAdminController {
    AuthAdminLogin(req, res) {
        const model = new auth_admin_model_1.AuthAdminModel;
        let username = req.body.username;
        let password = req.body.password;
        if (username == null || username == "" || username == undefined) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Username is Required", 400));
        }
        if (password == null || password == "" || password == undefined) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Password is Required", 400));
        }
        let obj = req.body;
        return model.Login(obj, res);
    }
}
exports.AuthAdminController = AuthAdminController;
