import e, { Response } from "express";
import { getRepository } from "typeorm";
import { AddressShipment } from "../../entity/payment/address_shipment.entity";
import { MessageUtil } from "../../lib/util/message.util";

import {v4 as uuidv4} from 'uuid';
import { AccountEntity } from "../../entity/account.entity";



export class AddressShipmentModel{

    public async AddAddressShipment(body : any, res : Response){

        let cek_user = await getRepository(AccountEntity).findOne({id : body.id_user});
        if(!cek_user){
            return res.status(404).send(MessageUtil.failed("Data user is not found", 404));
        }

        let cek_address = await getRepository(AddressShipment).findOne({id_user : body.id_user, alamat_kirim : body.alamat_kirim, status_alamat : body.status_alamat});
       
        if(!cek_address){

            body.id = uuidv4();
            body.status_alamat = true;
            let newData = getRepository(AddressShipment).create(body);
            let saved = await getRepository(AddressShipment).save(newData);

            if(saved){

                return res.status(200).send(MessageUtil.success("Data alamat penerima berhasil disimpan", saved));

            }else{

                return res.status(500).send(MessageUtil.failed("Data alamat penerima gagal disimpan", 500));

            }
        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist!", 200));
        }

    }

    public async UpdateAddressShipment(body : any, res : Response){

        let find = await getRepository(AddressShipment).findOne({id : body.id});

        if(find){

            find.alamat_kirim = body.alamat_kirim;
            find.id_user = body.id_user;
            find.nama_peneriman = body.nama_penerima;
            find.alamat_kirim = body.alamat_kirim;
            find.status_alamat = body.status_alamat;

            let output = await getRepository(AddressShipment).save(find);

            if(output){

                return res.status(200).send(MessageUtil.success("Data alamat penerima berhasil diupdate", output));

            }else{

                return res.status(500).send(MessageUtil.failed("Data alamat penerima gagal diupdate "+output, 500));
                
            }
        }else{

            return res.status(404).send(MessageUtil.failed("Data Address Shipment is Not Found", 404));

        }
    }

    public async SelectAddressShipment(body : any, res : Response){

        let cek_address = await getRepository(AddressShipment).find({id_user : body.id_user});

        if(cek_address){

            let output = await getRepository(AddressShipment).find(body);

            if(output){

                return res.status(200).send(MessageUtil.success("Data berhasil ditemukan", output));

            }else{

                return res.status(404).send(MessageUtil.failed("Data Address Shipment is Not Found", 404));

            }
        }else{

            return res.status(404).send(MessageUtil.failed("Data Address Shipment User ID "+body.id_user+" is not found", 404));

        }
    }

    public async DeleteAddressShipment(body : any, res : Response){

        let remove = await getRepository(AddressShipment).remove(body);

        if(remove){

            return res.status(200).send(MessageUtil.success("Data berhasil dihapus", remove));

        }else{

            return res.status(404).send(MessageUtil.failed("Data gagal dihapus", 404));

        }
    }
}