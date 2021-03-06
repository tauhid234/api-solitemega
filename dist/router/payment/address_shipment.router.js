"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const address_shipment_controller_1 = require("../../controller/payment/address_shipment.controller");
const router = (0, express_1.Router)();
const addressShipmentController = new address_shipment_controller_1.AddressShipmentController;
router.post("/solite-api/address-shipment/add", addressShipmentController.AddressShipmentAddController);
router.post("/solite-api/address-shipment/update", addressShipmentController.AddressShipmentUpdateController);
router.post("/solite-api/address-shipment/select", addressShipmentController.AddressShipmentSelectController);
router.post("/solite-api/address-shipment/delete", addressShipmentController.AddressShipmentDeleteController);
exports.default = router;
