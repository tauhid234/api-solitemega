"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateBodyHelper = void 0;
class ValidateBodyHelper {
    validateEntity(slice, req) {
        for (let i = 0; i < Object.keys(slice).length; i++) {
            let s = slice[i].valueOf();
            let bodys = Object.keys(req.body);
            if (bodys[i] != s) {
                return s;
            }
        }
    }
    validate(source, type) {
        let obj = new type();
        for (let key in obj) {
            if (!source.hasOwnProperty(key)) {
                return key;
            }
        }
    }
}
exports.ValidateBodyHelper = ValidateBodyHelper;
