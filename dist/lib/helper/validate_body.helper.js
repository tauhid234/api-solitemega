"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBodyHelper = void 0;
const message_util_1 = require("../util/message.util");
class ValidateBodyHelper {
    validateEntity(slice, req, res) {
        let path = req.path;
        let end_path = path.split("/");
        for (let i = 0; i < Object.keys(slice).length; i++) {
            let s = slice[i].valueOf();
            let bodys = Object.keys(req.body);
            if (bodys[i] != s) {
                return res.status(400).send(message_util_1.MessageUtil.failed("Field " + s + " is required for " + end_path[3] + " data", 400));
            }
        }
    }
    validate(source, type, res, req) {
        let obj = new type();
        let path = req.path;
        let end_path = path.split("/");
        for (let key in obj) {
            if (!source.hasOwnProperty(key)) {
                return res.status(400).send(message_util_1.MessageUtil.failed("Field " + key + " is required for " + end_path[3] + " data", 400));
            }
        }
    }
}
exports.ValidateBodyHelper = ValidateBodyHelper;
