import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { StatusPerkawinan } from "../../entity/parameter/status-perkawinan.entity";
import { MessageUtil } from "../../lib/util/message.util";




export class StatusPerkawinanModel{

    public async AddStatusPerkawinan(body : any, res : Response){

        let cek = await getRepository(StatusPerkawinan).findOne(body);
        if(!cek){

        const newAccount = getRepository(StatusPerkawinan).create(body);        
        const result = await getRepository(StatusPerkawinan).save(newAccount);
        return res.status(200).send(MessageUtil.success(result));
        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist", 200));
        }
    }

    public async UpdateStatusPerkawinan(body : any, res : Response){
        let find = await getRepository(StatusPerkawinan).findOne(body.id);
        if(find){
            find.nama_perkawinan = body.nama_perkawinan;
            find.kode_perkawinan = body.kode_perkawinan;
            let output = await getRepository(StatusPerkawinan).save(find);

            return res.status(200).send(MessageUtil.success("Data ID Status Perkawinan "+body.id+ " has been success updated"));
        }else{
            return res.status(404).send(MessageUtil.failed("Data Is Not Found", 404));
        }
    }

    public async SelectAllStatusPerkawinan(req : Request, res : Response){
        let output = await getRepository(StatusPerkawinan).find();
        return res.status(200).send(MessageUtil.success(output));
    }

    public async DeleteStatusPerkawinan(body : any, res : Response){
        let find = await getRepository(StatusPerkawinan).findOne(body.id);
        if(find){
            let output = await getRepository(StatusPerkawinan).remove(find);

            return res.status(200).send(MessageUtil.success("Data ID Status Perkawinan "+body.id+ " has been success delete"));
        }else{
            return res.status(404).send(MessageUtil.failed("Data Is Not Found", 404));
        }
    }
}