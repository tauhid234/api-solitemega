import { Response } from "express";
import { getRepository } from "typeorm";
import { AccountEntity } from "../../entity/account.entity";
import { Cart } from "../../entity/product/cart.entity";
import { Goods } from "../../entity/product/goods.entity";
import { MessageUtil } from "../../lib/util/message.util";

import { v4 as uuidv4} from 'uuid';



export class CartModel { 

    public async AddCart(body : any, res : Response){


        let cek_user = await getRepository(AccountEntity).findOne({id : body.id_user});
        if(!cek_user){
            return res.status(404).send(MessageUtil.failed("Data user is not found", 404));
        }

        let cek_produk = await getRepository(Goods).findOne({id : body.id_produk});
        if(!cek_produk){
            return res.status(404).send(MessageUtil.failed("Data produk is not found", 404));
        }

        let cek = await getRepository(Cart).findOne({id_produk : body.id_produk, id_user : body.id_user, status_keranjang : true});
        if(!cek){

            let data = {
                id : uuidv4(),
                id_user : body.id_user,
                id_produk : body.id_produk,
                status_keranjang : true,
                uang_muka : cek_produk.uang_muka,
                judul_produk : cek_produk.judul_produk
            }

            const newData = getRepository(Cart).create(data);
            const result =  await getRepository(Cart).save(newData);
            return res.status(200).send(MessageUtil.success("Data berhasil ditambahkan ke keranjang", result));
        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist", 200));
        }
    }

    public async SelectCart(body : any, res : Response){

        let cek_user = await getRepository(AccountEntity).findOne({id : body.id_user});
        if(!cek_user){
            return res.status(404).send(MessageUtil.failed("Data user is not found", 404));
        }

        let cek_cart = await getRepository(Cart).findOne({id_user : body.id_user, status_keranjang : true});
        if(cek_cart){

            return res.status(200).send(MessageUtil.success("Data berhasil ditemukan", cek_cart));

        }else{
            return res.status(404).send(MessageUtil.failed("Data user cart is not found", 404));
        }

    }

    public async DeleteCart(body : any, res : Response){
        let cek = await getRepository(Cart).findOne(body);
        if(cek){

            let deleted = await getRepository(Cart).remove(body);
            if(deleted){
                return res.status(200).send(MessageUtil.success("Data cart berhasil dihapus", deleted));
            }

        }else{
            return res.status(404).send(MessageUtil.failed("Data user cart is not found", 404));
        }
    }
}