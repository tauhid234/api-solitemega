"use strict";
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
exports.CategoryModel = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../../entity/product/category.entity");
const message_util_1 = require("../../lib/util/message.util");
class CategoryModel {
    AddCategory(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek = yield (0, typeorm_1.getRepository)(category_entity_1.Category).findOne(body);
            if (!cek) {
                const newAccount = (0, typeorm_1.getRepository)(category_entity_1.Category).create(body);
                const result = yield (0, typeorm_1.getRepository)(category_entity_1.Category).save(newAccount);
                return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil disimpan", result));
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist", 200));
            }
        });
    }
    UpdateCategory(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(category_entity_1.Category).findOne(body.id);
            if (find) {
                find.nama_kategori = body.nama_kategori;
                find.kode_kategori = body.kode_kategori;
                find.icon = body.icon;
                let output = yield (0, typeorm_1.getRepository)(category_entity_1.Category).save(find);
                return res.status(200).send(message_util_1.MessageUtil.success("Data ID Kategori " + body.id + " has been success updated", output));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Is Not Found", 404));
            }
        });
    }
    SelectAllCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let output = yield (0, typeorm_1.getRepository)(category_entity_1.Category).find(req.body);
            if (output.length == 0) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data tidak ditemukan", 404));
            }
            return res.status(200).send(message_util_1.MessageUtil.success("Data ditemukan", output));
        });
    }
    DeleteCategory(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(category_entity_1.Category).findOne(body.id);
            if (find) {
                let output = yield (0, typeorm_1.getRepository)(category_entity_1.Category).remove(find);
                return res.status(200).send(message_util_1.MessageUtil.success("Data ID Kategori " + body.id + " has been success delete", output));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Is Not Found", 404));
            }
        });
    }
}
exports.CategoryModel = CategoryModel;
