import { Response } from "express";
import { getRepository } from "typeorm";
import { AccountEntity } from "../../entity/account.entity";
import { Favorite } from "../../entity/product/favorite.entity";
import { Goods } from "../../entity/product/goods.entity";
import { MessageUtil } from "../../lib/util/message.util";

import {v4 as uuidv4} from 'uuid';



export class FavoriteModel{

    public async AddFavorite(body : any, res : Response){
        let cek_user = await getRepository(AccountEntity).findOne({id : body.id_user});
        if(!cek_user){
            return res.status(404).send(MessageUtil.failed("Data user is not found", 404));
        }

        let cek_product = await getRepository(Goods).findOne({id : body.id_produk});
        if(!cek_product){
            return res.status(404).send(MessageUtil.failed("Data product is not found", 404));
        }

        let cek = await getRepository(Favorite).findOne({id_user : body.id_user, id_produk : body.id_produk});
        if(!cek){

            body.id = uuidv4();
            let newData = getRepository(Favorite).create(body);
            let saved = await getRepository(Favorite).save(newData);
            if(saved){
                return res.status(200).send(MessageUtil.success("Data berhasil disimpan", saved));
            }else{
                return res.status(500).send(MessageUtil.failed("Data gagal disimpan", 500));
            }
        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist!", 200));
        }
    }

    public async SelectFaovrite(body : any, res : Response){

        let output = await getRepository(Favorite).findOne({id_user : body.id_user});
        if(output){
            return res.status(200).send(MessageUtil.success("Data berhasil ditemukan", output));
        }else{
            return res.status(404).send(MessageUtil.failed("Data favorite user is not found", 404));
        }
    }

    public async DeleteFaovrite(body : any, res : Response){

        let output = await getRepository(Favorite).remove(body);
        if(output){
            return res.status(200).send(MessageUtil.success("Data favorite berhasil dihapus", output));
        }else{
            return res.status(404).send(MessageUtil.failed("Data favorite user is not found", 404));
        }
    }
}