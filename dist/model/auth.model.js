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
exports.AuthModel = void 0;
const CryptoJS = __importStar(require("crypto-js/sha256"));
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../entity/account.entity");
const message_util_1 = require("../lib/util/message.util");
class AuthModel {
    Login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let verify_pw = CryptoJS.default(req.body.password).toString();
            let body = {
                phone: req.body.phone,
                password: verify_pw
            };
            let cek = yield (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne(body);
            if (!cek) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Phone Or Password is Worng", 404));
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.success("You're logged in"));
            }
        });
    }
}
exports.AuthModel = AuthModel;
