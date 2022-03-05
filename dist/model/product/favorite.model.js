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
exports.FavoriteModel = void 0;
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../../entity/account.entity");
const favorite_entity_1 = require("../../entity/product/favorite.entity");
const goods_entity_1 = require("../../entity/product/goods.entity");
const message_util_1 = require("../../lib/util/message.util");
const uuid_1 = require("uuid");
class FavoriteModel {
    AddFavorite(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek_user = yield (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne({ id: body.id_user });
            if (!cek_user) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user is not found", 404));
            }
            let cek_product = yield (0, typeorm_1.getRepository)(goods_entity_1.Goods).findOne({ id: body.id_produk });
            if (!cek_product) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data product is not found", 404));
            }
            let cek = yield (0, typeorm_1.getRepository)(favorite_entity_1.Favorite).findOne({ id_user: body.id_user, id_produk: body.id_produk });
            if (!cek) {
                body.id = (0, uuid_1.v4)();
                let newData = (0, typeorm_1.getRepository)(favorite_entity_1.Favorite).create(body);
                let saved = yield (0, typeorm_1.getRepository)(favorite_entity_1.Favorite).save(newData);
                if (saved) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil disimpan", saved));
                }
                else {
                    return res.status(500).send(message_util_1.MessageUtil.failed("Data gagal disimpan", 500));
                }
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist!", 200));
            }
        });
    }
    SelectFaovrite(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let output = yield (0, typeorm_1.getRepository)(favorite_entity_1.Favorite).findOne({ id_user: body.id_user });
            if (output) {
                return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil ditemukan", output));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data favorite user is not found", 404));
            }
        });
    }
    DeleteFaovrite(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let output = yield (0, typeorm_1.getRepository)(favorite_entity_1.Favorite).remove(body);
            if (output) {
                return res.status(200).send(message_util_1.MessageUtil.success("Data favorite berhasil dihapus", output));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data favorite user is not found", 404));
            }
        });
    }
}
exports.FavoriteModel = FavoriteModel;
