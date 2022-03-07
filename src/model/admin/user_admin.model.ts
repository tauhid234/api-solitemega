import { Response } from "express";
import { getRepository } from "typeorm";
import { UserAdmin } from "../../entity/admin/user_admin.entity";
import { MessageUtil } from "../../lib/util/message.util";

import {v4 as uuidv4} from 'uuid';
import * as CryptoJS from 'crypto-js/sha256';

export class UserAdminModel{

    public async AddUserAdmin(body : any, res : Response){

        let cek = await getRepository(UserAdmin).createQueryBuilder("user_admin").where("user_admin.phone = :phone", {phone : body.phone}).
                  orWhere("user_admin.email = :email", {email : body.email}).orWhere("user_admin.nama = :nama", {nama : body.nama}).
                  orWhere("user_admin.username = :username", {username : body.username}).getRawOne();

        // findOne({username : body.username, nama : body.nama, phone : body.phone, email : body.email});
        
        if(!cek){

            body.id = uuidv4();
            body.password = CryptoJS.default(body.password).toString();

            let newData = getRepository(UserAdmin).create(body);
            let saved = await getRepository(UserAdmin).save(newData);
            if(saved){
                return res.status(200).send(MessageUtil.success("Data user admin berhasil disimpan", saved));
            }else{
                return res.status(500).send(MessageUtil.failed("Data user admin gagal disimpan", 500));
            }
        }else{
            return res.status(200).send(MessageUtil.failed("Data user admin Already Exist!", 200));
        }
    }

    public async UpdateUserAdmin(body : any, res : Response){

        let find = await getRepository(UserAdmin).findOne({id : body.id});
        if(find){

            find.email = body.email;
            find.nama = body.nama;
            find.phone = body.phone;

            let update = await getRepository(UserAdmin).save(find);
            if(update){
                return res.status(200).send(MessageUtil.success("Data user admin berhasil diupdate", update));
            }else{
                return res.status(500).send(MessageUtil.failed("Data user admin gagal diupdate", update));
            }

        }else{
            return res.status(404).send(MessageUtil.failed("Data user admin is not found", 404));
        }
    }

    public async SelectUserAdmin(body : any, res : Response){
        
        let foundAdmin : any = await getRepository(UserAdmin).find(body);

        if(foundAdmin){

            let output : any[] = [];

            for(let i = 0; i < foundAdmin.length; i++){
                output.push(foundAdmin[i]);
            }

            return res.status(200).send(MessageUtil.success("Data berhasil ditemukan", output));

        }else{
            return res.status(404).send(MessageUtil.failed("Data user admin is not found", 404));
        }

    }

    public async DeleteUserAdmin(body : any, res : Response){

        let deleted = await getRepository(UserAdmin).delete({id : body.id});
        if(deleted){
            return res.status(200).send(MessageUtil.success("Data user admin berhasil dihapus", deleted));
        }else{
            return res.status(404).send(MessageUtil.failed("Data user admin is not found", 404));
        }
        
    }
}