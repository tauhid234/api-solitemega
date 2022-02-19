"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageUtil = void 0;
class MessageUtil {
    static success(msg) {
        let m = {
            message: msg,
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
