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
exports.CartModel = void 0;
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../../entity/account.entity");
const cart_entity_1 = require("../../entity/product/cart.entity");
const goods_entity_1 = require("../../entity/product/goods.entity");
const message_util_1 = require("../../lib/util/message.util");
const uuid_1 = require("uuid");
class CartModel {
    AddCart(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek_user = yield (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne({ id: body.id_user });
            if (!cek_user) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user is not found", 404));
            }
            let cek_produk = yield (0, typeorm_1.getRepository)(goods_entity_1.Goods).findOne({ id: body.id_produk });
            if (!cek_produk) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data produk is not found", 404));
            }
            let cek = yield (0, typeorm_1.getRepository)(cart_entity_1.Cart).findOne({ id_produk: body.id_produk, id_user: body.id_user, status_keranjang: true });
            if (!cek) {
                let data = {
                    id: (0, uuid_1.v4)(),
                    id_user: body.id_user,
                    id_produk: body.id_produk,
                    status_keranjang: true,
                    uang_muka: cek_produk.uang_muka,
                    judul_produk: cek_produk.judul_produk
                };
                const newData = (0, typeorm_1.getRepository)(cart_entity_1.Cart).create(data);
                const result = yield (0, typeorm_1.getRepository)(cart_entity_1.Cart).save(newData);
                return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil ditambahkan ke keranjang", result));
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist", 200));
            }
        });
    }
    SelectCart(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek_user = yield (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne({ id: body.id_user });
            if (!cek_user) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user is not found", 404));
            }
            let cek_cart = yield (0, typeorm_1.getRepository)(cart_entity_1.Cart).findOne({ id_user: body.id_user, status_keranjang: true });
            if (cek_cart) {
                return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil ditemukan", cek_cart));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user cart is not found", 404));
            }
        });
    }
    DeleteCart(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek = yield (0, typeorm_1.getRepository)(cart_entity_1.Cart).findOne(body);
            if (cek) {
                let deleted = yield (0, typeorm_1.getRepository)(cart_entity_1.Cart).remove(body);
                if (deleted) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data cart berhasil dihapus", deleted));
                }
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user cart is not found", 404));
            }
        });
    }
}
exports.CartModel = CartModel;
