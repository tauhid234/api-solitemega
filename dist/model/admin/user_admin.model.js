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
exports.UserAdminModel = void 0;
const typeorm_1 = require("typeorm");
const user_admin_entity_1 = require("../../entity/admin/user_admin.entity");
const message_util_1 = require("../../lib/util/message.util");
const uuid_1 = require("uuid");
const CryptoJS = __importStar(require("crypto-js/sha256"));
class UserAdminModel {
    AddUserAdmin(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek = yield (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).createQueryBuilder("user_admin").where("user_admin.phone = :phone", { phone: body.phone }).
                orWhere("user_admin.email = :email", { email: body.email }).orWhere("user_admin.nama = :nama", { nama: body.nama }).
                orWhere("user_admin.username = :username", { username: body.username }).getRawOne();
            // findOne({username : body.username, nama : body.nama, phone : body.phone, email : body.email});
            if (!cek) {
                body.id = (0, uuid_1.v4)();
                body.password = CryptoJS.default(body.password).toString();
                let newData = (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).create(body);
                let saved = yield (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).save(newData);
                if (saved) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data user admin berhasil disimpan", saved));
                }
                else {
                    return res.status(500).send(message_util_1.MessageUtil.failed("Data user admin gagal disimpan", 500));
                }
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data user admin Already Exist!", 200));
            }
        });
    }
    UpdateUserAdmin(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).findOne({ id: body.id });
            if (find) {
                find.email = body.email;
                find.nama = body.nama;
                find.phone = body.phone;
                let update = yield (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).save(find);
                if (update) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data user admin berhasil diupdate", update));
                }
                else {
                    return res.status(500).send(message_util_1.MessageUtil.failed("Data user admin gagal diupdate", update));
                }
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user admin is not found", 404));
            }
        });
    }
    SelectUserAdmin(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let foundAdmin = yield (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).find(body);
            if (foundAdmin) {
                let output = [];
                for (let i = 0; i < foundAdmin.length; i++) {
                    output.push(foundAdmin[i]);
                }
                return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil ditemukan", output));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user admin is not found", 404));
            }
        });
    }
    DeleteUserAdmin(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let deleted = yield (0, typeorm_1.getRepository)(user_admin_entity_1.UserAdmin).delete({ id: body.id });
            if (deleted) {
                return res.status(200).send(message_util_1.MessageUtil.success("Data user admin berhasil dihapus", deleted));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user admin is not found", 404));
            }
        });
    }
}
exports.UserAdminModel = UserAdminModel;
