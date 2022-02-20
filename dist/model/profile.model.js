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
exports.ProfileModel = void 0;
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../entity/account.entity");
const message_util_1 = require("../lib/util/message.util");
const pendidikan_entity_1 = require("../entity/parameter/pendidikan.entity");
const status_perkawinan_entity_1 = require("../entity/parameter/status-perkawinan.entity");
const profile_entity_1 = require("../entity/profile.entity");
class ProfileModel {
    createProfile(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let output = null;
            // CEK PHONE REGISTER STEP 1
            let cek_phone = yield (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne({ phone: req.body.phone });
            if (!cek_phone) {
                output = "Phone Not Found in Data Account";
                return res.status(400).send(message_util_1.MessageUtil.failed(output, 400));
            }
            // CEK EDUCATION
            let cek_education = yield (0, typeorm_1.getRepository)(pendidikan_entity_1.Pendidikan).findOne({ kode_pendidikan: req.body.pendidikan });
            if (!cek_education) {
                output = "Education Not Found in Data Education";
                return res.status(400).send(message_util_1.MessageUtil.failed(output, 400));
            }
            // CEK MARITAL STATUS
            let cek_marital_status = yield (0, typeorm_1.getRepository)(status_perkawinan_entity_1.StatusPerkawinan).findOne({ kode_perkawinan: req.body.status_perkawinan });
            if (!cek_marital_status) {
                output = "Marital Status Not Found in Data Marital Status";
                return res.status(400).send(message_util_1.MessageUtil.failed(output, 400));
            }
            let name = req.body.nama_lengkap.toUpperCase();
            let cek_duplicate_data = yield (0, typeorm_1.getRepository)(profile_entity_1.Profile).findOne({ nama_lengkap: name, email: req.body.email });
            if (cek_duplicate_data) {
                output = "Data Already Exist";
                return res.status(406).send(message_util_1.MessageUtil.failed(output, 406));
            }
            let create = yield (0, typeorm_1.getRepository)(profile_entity_1.Profile).create(req.body);
            let save = yield (0, typeorm_1.getRepository)(profile_entity_1.Profile).save(create);
            return res.status(200).send(message_util_1.MessageUtil.success(save));
        });
    }
}
exports.ProfileModel = ProfileModel;
