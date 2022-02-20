"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileController = void 0;
const typeorm_1 = require("typeorm");
const profile_entity_1 = require("../entity/profile.entity");
const validate_body_helper_1 = require("../lib/helper/validate_body.helper");
const message_util_1 = require("../lib/util/message.util");
const profile_model_1 = require("../model/profile.model");
class ProfileController {
    createProfile(req, res) {
        const model = new profile_model_1.ProfileModel;
        const message = new message_util_1.MessageUtil;
        const prop = (0, typeorm_1.getConnection)().getMetadata(profile_entity_1.Profile).ownColumns.map(column => column.propertyName);
        const slice = prop.slice(1);
        let regex_mail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validateEntity(slice, req, res);
        if (output) {
            return output;
        }
        if (!req.body.email.match(regex_mail)) {
            return res.status(400).send(message_util_1.MessageUtil.failed("Email is Not Valid", 400));
        }
        return model.createProfile(req, res);
    }
}
exports.ProfileController = ProfileController;
