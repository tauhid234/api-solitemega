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
exports.GoodsModel = void 0;
const typeorm_1 = require("typeorm");
const goods_entity_1 = require("../../entity/product/goods.entity");
const uuid_1 = require("uuid");
const message_util_1 = require("../../lib/util/message.util");
const category_entity_1 = require("../../entity/product/category.entity");
class GoodsModel {
    AddGoods(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek_category = yield (0, typeorm_1.getRepository)(category_entity_1.Category).findOne({ kode_kategori: body.kode_kategori });
            if (!cek_category) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Category is not found", 404));
            }
            let cek = yield (0, typeorm_1.getRepository)(goods_entity_1.Goods).findOne({ kode_kategori: body.kode_kategori, judul_produk: body.judul_produk });
            if (!cek) {
                body.id = (0, uuid_1.v4)();
                body.judul_produk = body.judul_produk.toUpperCase();
                let newData = (0, typeorm_1.getRepository)(goods_entity_1.Goods).create(body);
                let save = yield (0, typeorm_1.getRepository)(goods_entity_1.Goods).save(newData);
                return res.status(200).send(message_util_1.MessageUtil.success("Data produk berhasil disimpan", save));
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist", 200));
            }
        });
    }
    SelectGoods(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek = yield (0, typeorm_1.getRepository)(goods_entity_1.Goods).find(body);
            if (cek) {
                return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil ditemukan", cek));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Product is not found", 404));
            }
        });
    }
}
exports.GoodsModel = GoodsModel;
