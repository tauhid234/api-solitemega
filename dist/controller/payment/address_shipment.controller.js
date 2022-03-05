"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressShipmentController = void 0;
const add_dto_1 = require("../../dto/payment/address-shipment/add.dto");
const delete_dto_1 = require("../../dto/payment/address-shipment/delete.dto");
const select_dto_1 = require("../../dto/payment/address-shipment/select.dto");
const update_dto_1 = require("../../dto/payment/address-shipment/update.dto");
const validate_body_helper_1 = require("../../lib/helper/validate_body.helper");
const address_shipment_model_1 = require("../../model/payment/address_shipment.model");
class AddressShipmentController {
    AddressShipmentAddController(req, res) {
        const model = new address_shipment_model_1.AddressShipmentModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, add_dto_1.AddressShipmentAddDto, res, req);
        if (output) {
            return output;
        }
        return model.AddAddressShipment(req.body, res);
    }
    AddressShipmentUpdateController(req, res) {
        const model = new address_shipment_model_1.AddressShipmentModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, update_dto_1.AddressShipmentUpdateDto, res, req);
        if (output) {
            return output;
        }
        return model.UpdateAddressShipment(req.body, res);
    }
    AddressShipmentSelectController(req, res) {
        const model = new address_shipment_model_1.AddressShipmentModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, select_dto_1.AddressShipmentSelectDto, res, req);
        if (output) {
            return output;
        }
        return model.SelectAddressShipment(req.body, res);
    }
    AddressShipmentDeleteController(req, res) {
        const model = new address_shipment_model_1.AddressShipmentModel;
        let validate_body = new validate_body_helper_1.ValidateBodyHelper;
        let output = validate_body.validate(req.body, delete_dto_1.AddressShipmentDeleteDto, res, req);
        if (output) {
            return output;
        }
        return model.DeleteAddressShipment(req.body, res);
    }
}
exports.AddressShipmentController = AddressShipmentController;
