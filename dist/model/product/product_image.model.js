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
exports.ProductImageModel = void 0;
const typeorm_1 = require("typeorm");
const product_image_entity_1 = require("../../entity/product/product_image.entity");
const uuid_1 = require("uuid");
const message_util_1 = require("../../lib/util/message.util");
const goods_entity_1 = require("../../entity/product/goods.entity");
class ProductImageModel {
    AddProductImage(req, res) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            let t = (_a = req.files) === null || _a === void 0 ? void 0 : _a.image;
            let body = req.body;
            let cek = yield (0, typeorm_1.getRepository)(product_image_entity_1.ProductImage).findOne({ id_produk: body.id_produk, nama_file: t.name });
            if (!cek) {
                let cek_product = yield (0, typeorm_1.getRepository)(goods_entity_1.Goods).findOne({ id: body.id_produk });
                if (!cek_product) {
                    return res.status(404).send(message_util_1.MessageUtil.failed("Data product is not found", 404));
                }
                let folder = './upload/product/' + t.name;
                let upload = t.mv(folder);
                if (upload) {
                    console.log("BERHASIL");
                }
                else {
                    console.log("GAGAL UPLOAD");
                }
                let data = {
                    id: (0, uuid_1.v4)(),
                    id_produk: body.id_produk,
                    nama_file: t.name,
                };
                let newData = (0, typeorm_1.getRepository)(product_image_entity_1.ProductImage).create(data);
                let output = yield (0, typeorm_1.getRepository)(product_image_entity_1.ProductImage).save(newData);
                if (output) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil disimpan", output));
                }
                else {
                    return res.status(500).send(message_util_1.MessageUtil.failed("Data gagal disimpan " + output, 500));
                }
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist!", 200));
            }
        });
    }
}
exports.ProductImageModel = ProductImageModel;
