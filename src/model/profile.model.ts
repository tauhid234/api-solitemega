import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AccountEntity } from "../entity/account.entity";
import * as CryptoJS from 'crypto-js/sha256';
import { MessageUtil } from "../lib/util/message.util";
import { Pendidikan } from "../entity/parameter/pendidikan.entity";
import { StatusPerkawinan } from "../entity/parameter/status-perkawinan.entity";
import { Profile } from "../entity/profile.entity";


export class ProfileModel{

    public async createProfile(req : Request, res : Response){

        let output = null;



        // CEK PHONE REGISTER STEP 1
        let cek_phone = await getRepository(AccountEntity).findOne({phone : req.body.phone});
        if(!cek_phone){
            output = "Phone Not Found in Data Account";
            return res.status(400).send(MessageUtil.failed(output, 400));
        }

        // CEK EDUCATION
        let cek_education = await getRepository(Pendidikan).findOne({kode_pendidikan : req.body.pendidikan});
        if(!cek_education){
            output = "Education Not Found in Data Education";
            return res.status(400).send(MessageUtil.failed(output, 400));
        }

        // CEK MARITAL STATUS
        let cek_marital_status = await getRepository(StatusPerkawinan).findOne({kode_perkawinan : req.body.status_perkawinan});
        if(!cek_marital_status){
            output = "Marital Status Not Found in Data Marital Status";
            return res.status(400).send(MessageUtil.failed(output, 400));
        }

        let name = req.body.nama_lengkap.toUpperCase();
        let cek_duplicate_data = await getRepository(Profile).findOne({nama_lengkap : name, email : req.body.email});
        if(cek_duplicate_data){
            output = "Data Already Exist";
            return res.status(406).send(MessageUtil.failed(output, 406));
        }

        let create = await getRepository(Profile).create(req.body);
        let save = await getRepository(Profile).save(create);
        
        
        return res.status(200).send(MessageUtil.success("Data berhasil disimpan",save));




    }

    public async SelectProfile(body : any, res : Response){
        
        let foundProdileUSer : any = await getRepository(Profile).find(body);

        if(foundProdileUSer){

            let output : any[] = [];

            for(let i = 0; i < foundProdileUSer.length; i++){
                output.push(foundProdileUSer[i]);
            }

            return res.status(200).send(MessageUtil.success("Data berhasil ditemukan", output));

        }else{
            return res.status(404).send(MessageUtil.failed("Data user admin is not found", 404));
        }

    }
}