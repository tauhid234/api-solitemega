"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthAdminModel = void 0;
const typeorm_1 = require("typeorm");
const user_admin_entity_1 = require("../../entity/admin/user_admin.entity");
const CryptoJS = __importStar(require("crypto-js/sha256"));
const message_util_1 = require("../../lib/util/message.util");
class AuthAdminModel {
    Login(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let decrypt = CryptoJS.default(body.password).toString();
            let data = {
                username: body.username,
                password: decrypt
            };
            let cek_valid = yield (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).findOne(data);
            if (!cek_valid) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Username Or Password is Wrong", 404));
            }
            return res.status(200).send(message_util_1.MessageUtil.success("You're Logged in Role Admin", cek_valid));
        });
    }
}
exports.AuthAdminModel = AuthAdminModel;
