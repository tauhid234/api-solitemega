"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusPerkawinanController = void 0;
const typeorm_1 = require("typeorm");
const update_dto_1 = require("../../dto/status-perkawinan/update.dto");
const status_perkawinan_entity_1 = require("../../entity/parameter/status-perkawinan.entity");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const message_util_1 = require("../../lib/util/message.util");
const status_perkawinan_model_1 = require("../../model/parameter/status-perkawinan.model");
class StatusPerkawinanController {
    statusPerkawinanAddController(req, res) {
        const model = new status_perkawinan_model_1.StatusPerkawinanModel;
        const prop = (0, typeorm_1.getConnection)().getMetadata(status_perkawinan_entity_1.StatusPerkawinan).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);
        const req_body = req.body;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if (output) {
            return output;
        }
        return model.AddStatusPerkawinan(req_body, res);
    }
    statusPerkawinanUpdateController(req, res) {
        const model = new status_perkawinan_model_1.StatusPerkawinanModel;
        if (!req.body.id) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field ID is required for update data", 400));
        }
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, update_dto_1.UpdateStatusPerkawinanDto, res, req);
        if (output) {
            return output;
        }
        return model.UpdateStatusPerkawinan(req.body, res);
    }
    statusPerkawinanSelectAllController(req, res) {
        const model = new status_perkawinan_model_1.StatusPerkawinanModel;
        return model.SelectAllStatusPerkawinan(req, res);
    }
    statusPerkawinanDeleteController(req, res) {
        const model = new status_perkawinan_model_1.StatusPerkawinanModel;
        if (!req.body.id) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field ID is required for delete data", 400));
        }
        return model.DeleteStatusPerkawinan(req.body, res);
    }
}
exports.StatusPerkawinanController = StatusPerkawinanController;
