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
exports.AddressShipmentModel = void 0;
const typeorm_1 = require("typeorm");
const address_shipment_entity_1 = require("../../entity/payment/address_shipment.entity");
const message_util_1 = require("../../lib/util/message.util");
const uuid_1 = require("uuid");
const account_entity_1 = require("../../entity/account.entity");
class AddressShipmentModel {
    AddAddressShipment(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek_user = yield (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne({ id: body.id_user });
            if (!cek_user) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user is not found", 404));
            }
            let cek_address = yield (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).findOne({ id_user: body.id_user, alamat_kirim: body.alamat_kirim, status_alamat: body.status_alamat });
            if (!cek_address) {
                body.id = (0, uuid_1.v4)();
                body.status_alamat = true;
                let newData = (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).create(body);
                let saved = yield (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).save(newData);
                if (saved) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data alamat penerima berhasil disimpan", saved));
                }
                else {
                    return res.status(500).send(message_util_1.MessageUtil.failed("Data alamat penerima gagal disimpan", 500));
                }
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist!", 200));
            }
        });
    }
    UpdateAddressShipment(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).findOne({ id: body.id });
            if (find) {
                find.alamat_kirim = body.alamat_kirim;
                find.id_user = body.id_user;
                find.nama_peneriman = body.nama_penerima;
                find.alamat_kirim = body.alamat_kirim;
                find.status_alamat = body.status_alamat;
                let output = yield (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).save(find);
                if (output) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data alamat penerima berhasil diupdate", output));
                }
                else {
                    return res.status(500).send(message_util_1.MessageUtil.failed("Data alamat penerima gagal diupdate " + output, 500));
                }
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Address Shipment is Not Found", 404));
            }
        });
    }
    SelectAddressShipment(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek_address = yield (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).find({ id_user: body.id_user });
            if (cek_address) {
                let output = yield (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).find(body);
                if (output) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil ditemukan", output));
                }
                else {
                    return res.status(404).send(message_util_1.MessageUtil.failed("Data Address Shipment is Not Found", 404));
                }
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Address Shipment User ID " + body.id_user + " is not found", 404));
            }
        });
    }
    DeleteAddressShipment(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let remove = yield (0, typeorm_1.getRepository)(address_shipment_entity_1.AddressShipment).remove(body);
            if (remove) {
                return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil dihapus", remove));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data gagal dihapus", 404));
            }
        });
    }
}
exports.AddressShipmentModel = AddressShipmentModel;
