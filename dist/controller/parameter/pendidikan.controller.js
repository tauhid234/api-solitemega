"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PendidikanController = void 0;
const typeorm_1 = require("typeorm");
const update_dto_1 = require("../../dto/pendidikan/update.dto");
const pendidikan_entity_1 = require("../../entity/parameter/pendidikan.entity");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const message_util_1 = require("../../lib/util/message.util");
const pendidikan_model_1 = require("../../model/parameter/pendidikan.model");
class PendidikanController {
    pendidikanAddController(req, res) {
        const model = new pendidikan_model_1.PendidikanModel;
        const prop = (0, typeorm_1.getConnection)().getMetadata(pendidikan_entity_1.Pendidikan).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);
        const req_body = req.body;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if (output) {
            return output;
        }
        return model.AddPendidikan(req_body, res);
    }
    pendidikanUpdateController(req, res) {
        const model = new pendidikan_model_1.PendidikanModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, update_dto_1.UpdatePendidikanDto);
        if (output) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field " + output + " is required for update data", 400));
        }
        return model.UpdatePendidikan(req.body, res);
    }
    pendidikanSelectAllController(req, res) {
        const model = new pendidikan_model_1.PendidikanModel;
        return model.SelectAllPendidikan(req, res);
    }
    pendidikanDeleteController(req, res) {
        const model = new pendidikan_model_1.PendidikanModel;
        if (!req.body.id) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Field ID is required for delete data", 400));
        }
        return model.DeletePendidikan(req.body, res);
    }
}
exports.PendidikanController = PendidikanController;
