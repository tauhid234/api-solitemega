import { Request, Response } from "express";
import { AddressShipmentAddDto } from "../../dto/payment/address-shipment/add.dto";
import { AddressShipmentDeleteDto } from "../../dto/payment/address-shipment/delete.dto";
import { AddressShipmentSelectDto } from "../../dto/payment/address-shipment/select.dto";
import { AddressShipmentUpdateDto } from "../../dto/payment/address-shipment/update.dto";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { AddressShipmentModel } from "../../model/payment/address_shipment.model";



export class AddressShipmentController{

    public AddressShipmentAddController(req : Request, res : Response){

        const model = new AddressShipmentModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, AddressShipmentAddDto, res, req);
        if(output){
            return output;
        }

        return model.AddAddressShipment(req.body, res);

    }

    public AddressShipmentUpdateController(req : Request, res : Response){
        
        const model = new AddressShipmentModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, AddressShipmentUpdateDto, res, req);
        if(output){
            return output;
        }

        return model.UpdateAddressShipment(req.body, res);
    }

    public AddressShipmentSelectController(req : Request, res : Response){
        
        const model = new AddressShipmentModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, AddressShipmentSelectDto, res, req);
        if(output){
            return output;
        }

        return model.SelectAddressShipment(req.body, res);

    }

    public AddressShipmentDeleteController(req : Request, res : Response){

        const model = new AddressShipmentModel;
        let validate_body = new ValidateBodyHelper;
        let output = validate_body.validate(req.body, AddressShipmentDeleteDto, res, req);
        if(output){
            return output;
        }

        return model.DeleteAddressShipment(req.body, res);
    }
}