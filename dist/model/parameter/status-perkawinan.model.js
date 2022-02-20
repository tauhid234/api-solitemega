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
exports.StatusPerkawinanModel = void 0;
const typeorm_1 = require("typeorm");
const status_perkawinan_entity_1 = require("../../entity/parameter/status-perkawinan.entity");
const message_util_1 = require("../../lib/util/message.util");
class StatusPerkawinanModel {
    AddStatusPerkawinan(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let cek = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).findOne(body);
            if (!cek) {
                const newAccount = (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).create(body);
                const result = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).save(newAccount);
                return res.status(200).send(message_util_1.MessageUtil.success(result));
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist", 200));
            }
        });
    }
    UpdateStatusPerkawinan(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).findOne(body.id);
            if (find) {
                find.nama_perkawinan = body.nama_perkawinan;
                find.kode_perkawinan = body.kode_perkawinan;
                let output = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).save(find);
                return res.status(200).send(message_util_1.MessageUtil.success("Data ID Status Perkawinan " + body.id + " has been success updated"));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Is Not Found", 404));
            }
        });
    }
    SelectAllStatusPerkawinan(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let output = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).find();
            return res.status(200).send(message_util_1.MessageUtil.success(output));
        });
    }
    DeleteStatusPerkawinan(body, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let find = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).findOne(body.id);
            if (find) {
                let output = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).remove(find);
                return res.status(200).send(message_util_1.MessageUtil.success("Data ID Status Perkawinan " + body.id + " has been success delete"));
            }
            else {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data Is Not Found", 404));
            }
        });
    }
}
exports.StatusPerkawinanModel = StatusPerkawinanModel;
