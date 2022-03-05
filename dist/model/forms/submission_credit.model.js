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
exports.SubmissionCreditModel = void 0;
const typeorm_1 = require("typeorm");
const account_entity_1 = require("../../entity/account.entity");
const message_util_1 = require("../../lib/util/message.util");
const uuid_1 = require("uuid");
const submission_credit_entity_1 = require("../../entity/forms/submission_credit.entity");
class SubmissionCreditModel {
    AddSubmissionCredit(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let body = req.body;
            let file = req.files;
            let file_ktp = file === null || file === void 0 ? void 0 : file.foto_ktp;
            let file_kk = file === null || file === void 0 ? void 0 : file.foto_kk;
            let file_wajah = file === null || file === void 0 ? void 0 : file.foto_wajah;
            let file_sk_domisili = file === null || file === void 0 ? void 0 : file.foto_sk_domisili_pbb;
            let cek_user = yield (0, typeorm_1.getRepository)(account_entity_1.AccountEntity).findOne({ id: body.id_user });
            if (!cek_user) {
                return res.status(404).send(message_util_1.MessageUtil.failed("Data user is not found", 404));
            }
            let cek = yield (0, typeorm_1.getRepository)(submission_credit_entity_1.SubmissionCredit).findOne({ id_user: body.id_user });
            if (!cek) {
                let folder_ktp = './upload/ktp/' + file.foto_ktp.name;
                let upload_ktp = file_ktp.mv(folder_ktp);
                let folder_kk = './upload/kk/' + file.foto_kk.name;
                let upload_kk = file_kk.mv(folder_kk);
                let folder_verify_wajah = './upload/verify_wajah/' + file.foto_wajah.name;
                let upload_verify_wajah = file_wajah.mv(folder_verify_wajah);
                let folder_sk_domisili = './upload/sk_domisili/' + file.foto_sk_domisili_pbb.name;
                let upload_sk_domisili = file_sk_domisili.mv(folder_sk_domisili);
                body.id = (0, uuid_1.v4)();
                body.foto_ktp = file.foto_ktp.name;
                body.foto_kk = file.foto_kk.name;
                body.foto_wajah = file.foto_wajah.name;
                body.foto_sk_domisili_pbb = file.foto_sk_domisili_pbb.name;
                body.status_kebijakan = true;
                let newData = (0, typeorm_1.getRepository)(submission_credit_entity_1.SubmissionCredit).create(body);
                let saved = yield (0, typeorm_1.getRepository)(submission_credit_entity_1.SubmissionCredit).save(newData);
                if (saved) {
                    return res.status(200).send(message_util_1.MessageUtil.success("Data berhasil disimpan", saved));
                }
                else {
                    return res.status(500).send(message_util_1.MessageUtil.failed("Data gagal disimpan " + saved, 500));
                }
            }
            else {
                return res.status(200).send(message_util_1.MessageUtil.failed("Data Already Exist", 200));
            }
        });
    }
}
exports.SubmissionCreditModel = SubmissionCreditModel;
