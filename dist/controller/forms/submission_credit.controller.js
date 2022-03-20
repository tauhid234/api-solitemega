"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmissionCreditController = void 0;
const add_dto_1 = require("../../dto/forms/submission-credit/add.dto");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const message_util_1 = require("../../lib/util/message.util");
const submission_credit_model_1 = require("../../model/forms/submission_credit.model");
class SubmissionCreditController {
    SubmissionCreditAddController(req, res) {
        const model = new submission_credit_model_1.SubmissionCreditModel;
        let validate = new validate_body_helper_1.ValidateBodyHelper;
        let validate_body = validate.validate(req.body, add_dto_1.SubmissionCreditAddDto, res, req);
        if (validate_body) {
            return validate_body;
        }
        let field_file = req.files;
        if (!(field_file === null || field_file === void 0 ? void 0 : field_file.foto_ktp)) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field foto_ktp is required add data", 400));
        }
        if (!(field_file === null || field_file === void 0 ? void 0 : field_file.foto_kk)) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field foto_kk is required add data", 400));
        }
        if (!(field_file === null || field_file === void 0 ? void 0 : field_file.foto_wajah)) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field foto_wajah is required add data", 400));
        }
        if (!(field_file === null || field_file === void 0 ? void 0 : field_file.foto_sk_domisili_pbb)) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field foto_sk_domisili_pbb is required add data", 400));
        }
        if (req.body.status_kebijakan == "false" || req.body.status_kebijakan == "") {
            return res.status(403).send(message_util_1.MessageUtil.failed("Harap setujui data yang akan anda kirimkan saat ini", 403));
        }
        return model.AddSubmissionCredit(req, res);
    }
    SubmissionCreditSelectController(req, res) {
        const model = new submission_credit_model_1.SubmissionCreditModel;
        return model.SelectSubmissionCredit(req.body, res);
    }
}
exports.SubmissionCreditController = SubmissionCreditController;
