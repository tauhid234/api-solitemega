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
exports.PendidikanModel = void 0;
const typeorm_1 = require("typeorm");
const pendidikan_entity_1 = require("../entity/pendidikan.entity");
const message_util_1 = require("../lib/util/message.util");
class PendidikanModel {
    AddPendidikan(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).findOne(body);
            if (!cek) {
                const newAccount = (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).create(body);
                const result = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).save(newAccount);
                return res.status(200).send(message_util_1.MessageUtil.success(result));
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist", 200));
            }
        });
    }
    UpdatePendidikan(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).findOne(body.id);
            if (find) {
                find.nama_pendidikan = body.nama_pendidikan;
                find.kode_pendidikan = body.kode_pendidikan;
                let output = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).save(find);
                return res.status(200).send(message_util_1.MessageUtil.success("Data ID Pendidikan " + body.id + " has been success updated"));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Is Not Found", 404));
            }
        });
    }
    SelectAllPendidikan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let output = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).find();
            return res.status(200).send(message_util_1.MessageUtil.success(output));
        });
    }
    DeletePendidikan(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).findOne(body.id);
            if (find) {
                let output = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).remove(find);
                return res.status(200).send(message_util_1.MessageUtil.success("Data ID Pendidikan " + body.id + " has been success delete"));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Is Not Found", 404));
            }
        });
    }
}
exports.PendidikanModel = PendidikanModel;
