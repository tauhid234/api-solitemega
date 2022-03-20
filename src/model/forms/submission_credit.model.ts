import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { AccountEntity } from "../../entity/account.entity";
import { MessageUtil } from "../../lib/util/message.util";

import {v4 as uuidv4} from 'uuid';
import { SubmissionCredit } from "../../entity/forms/submission_credit.entity";


export class SubmissionCreditModel{

    public async AddSubmissionCredit(req : Request, res : Response){

        let body = req.body;
        let file : any = req.files;

        let file_ktp = file?.foto_ktp;
        let file_kk = file?.foto_kk;
        let file_wajah = file?.foto_wajah;
        let file_sk_domisili = file?.foto_sk_domisili_pbb;

        let cek_user = await getRepository(AccountEntity).findOne({id : body.id_user});
        if(!cek_user){
            return res.status(404).send(MessageUtil.failed("Data user is not found", 404));
        }

        let cek = await getRepository(SubmissionCredit).findOne({id_user : body.id_user});
        if(!cek){

            let folder_ktp = './upload/ktp/' + file.foto_ktp.name;
            let upload_ktp = file_ktp.mv(folder_ktp);

            let folder_kk = './upload/kk/' + file.foto_kk.name;
            let upload_kk = file_kk.mv(folder_kk);
            
            let folder_verify_wajah = './upload/verify_wajah/' + file.foto_wajah.name;
            let upload_verify_wajah = file_wajah.mv(folder_verify_wajah);
            
            let folder_sk_domisili = './upload/sk_domisili/' + file.foto_sk_domisili_pbb.name;
            let upload_sk_domisili = file_sk_domisili.mv(folder_sk_domisili);

            body.id = uuidv4();
            
            body.foto_ktp = file.foto_ktp.name;
            body.foto_kk = file.foto_kk.name;
            body.foto_wajah = file.foto_wajah.name;
            body.foto_sk_domisili_pbb = file.foto_sk_domisili_pbb.name;

            body.status_kebijakan = true;

            let newData = getRepository(SubmissionCredit).create(body);
            let saved = await getRepository(SubmissionCredit).save(newData);
            if(saved){
                return res.status(200).send(MessageUtil.success("Data berhasil disimpan",saved));
            }else{
                return res.status(500).send(MessageUtil.failed("Data gagal disimpan "+saved,500));
            }
        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist", 200));
        }

    }

    public async SelectSubmissionCredit(body : any, res : Response){

        let cek = await getRepository(SubmissionCredit).find(body);
        if(cek){

            return res.status(200).send(MessageUtil.success("Data berhasil ditemukan", cek));

        }else{
            return res.status(404).send(MessageUtil.failed("Data Submission Kredit is not found", 404));
        }
        
    }
}