import { Router } from "express";
import { AddressShipmentController } from "../../controller/payment/address_shipment.controller";



const router = Router();
const addressShipmentController = new AddressShipmentController;

router.post("/solite-api/address-shipment/add", addressShipmentController.AddressShipmentAddController);
router.post("/solite-api/address-shipment/update", addressShipmentController.AddressShipmentUpdateController);
router.post("/solite-api/address-shipment/select", addressShipmentController.AddressShipmentSelectController);
router.post("/solite-api/address-shipment/delete", addressShipmentController.AddressShipmentDeleteController);

export default router;