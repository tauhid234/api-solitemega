"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUtil = void 0;
class MessageUtil {
    static success(msg, data) {
        let m = {
            message: msg,
            data: data,
            status: "success"
        };
        return m;
    }
    static failed(msg, code) {
        let m = {
            message: msg,
            code: code,
            status: "failed"
        };
        return m;
    }
}
exports.MessageUtil = MessageUtil;
