import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ProductImage } from "../../entity/product/product_image.entity";

import {v4 as uuidv4} from 'uuid';
import { MessageUtil } from "../../lib/util/message.util";
import { Goods } from "../../entity/product/goods.entity";

export class ProductImageModel{

    public async AddProductImage(req : Request, res : Response){

        let t : any = req.files?.image;
        let body = req.body;

        let cek = await getRepository(ProductImage).findOne({id_produk : body.id_produk, nama_file : t.name});

        if(!cek){

            let cek_product = await getRepository(Goods).findOne({id : body.id_produk});
            if(!cek_product){
                return res.status(404).send(MessageUtil.failed("Data product is not found",404));
            }

            let folder = './upload/product/' + t.name;
            let upload = t.mv(folder);
            
            if(upload){
                console.log("BERHASIL");
            }else{
                console.log("GAGAL UPLOAD");
            }

            let data = {
                id : uuidv4(),
                id_produk : body.id_produk,
                nama_file : t.name,
            }

            let newData = getRepository(ProductImage).create(data);
            let output = await getRepository(ProductImage).save(newData);
            if(output){
                return res.status(200).send(MessageUtil.success("Data berhasil disimpan",output));
            }else{
                return res.status(500).send(MessageUtil.failed("Data gagal disimpan "+output,500));
            }

        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist!",200));
        }
    }
}