import { Response } from "express";
import { getRepository } from "typeorm";
import { Goods } from "../../entity/product/goods.entity";

import {v4 as uuidv4} from 'uuid';
import { MessageUtil } from "../../lib/util/message.util";
import { Category } from "../../entity/product/category.entity";
import { ProductImage } from "../../entity/product/product_image.entity";



export class GoodsModel{

    public async AddGoods(body : any, res : Response){

        let cek_category = await getRepository(Category).findOne({kode_kategori : body.kode_kategori});
        if(!cek_category){
            return res.status(404).send(MessageUtil.failed("Data Category is not found",404));
        }

        let cek = await getRepository(Goods).findOne({kode_kategori : body.kode_kategori, judul_produk : body.judul_produk});
        if(!cek){

            body.id = uuidv4();
            body.judul_produk = body.judul_produk.toUpperCase();

            let newData = getRepository(Goods).create(body);
            let save = await getRepository(Goods).save(newData);
            return res.status(200).send(MessageUtil.success("Data produk berhasil disimpan",save));

        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist",200));
        }
    }

    public async SelectGoods(body : any, res : Response){

        let cek = await getRepository(Goods).find(body);
        if(cek){

            return res.status(200).send(MessageUtil.success("Data berhasil ditemukan", cek));

        }else{
            return res.status(404).send(MessageUtil.failed("Data Product is not found", 404));
        }
        
    }
}