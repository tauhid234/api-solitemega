import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Pendidikan } from "../../entity/parameter/pendidikan.entity";
import { MessageUtil } from "../../lib/util/message.util";




export class PendidikanModel{

    public async AddPendidikan(body : any, res : Response){

        let cek = await getRepository(Pendidikan).findOne(body);
        if(!cek){

        const newAccount = getRepository(Pendidikan).create(body);        
        const result = await getRepository(Pendidikan).save(newAccount);
        return res.status(200).send(MessageUtil.success("Data berhasil disimpan",result));
        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist", 200));
        }
    }

    public async UpdatePendidikan(body : any, res : Response){
        let find = await getRepository(Pendidikan).findOne(body.id);
        if(find){
            find.nama_pendidikan = body.nama_pendidikan;
            find.kode_pendidikan = body.kode_pendidikan;
            let output = await getRepository(Pendidikan).save(find);

            return res.status(200).send(MessageUtil.success("Data ID Pendidikan "+body.id+ " has been success updated", output));
        }else{
            return res.status(404).send(MessageUtil.failed("Data Is Not Found", 404));
        }
    }

    public async SelectAllPendidikan(req : Request, res : Response){
        let output = await getRepository(Pendidikan).find(req.body);
        if(output.length == 0){
            return res.status(404).send(MessageUtil.failed("Data tidak ditemukan", 404));
        }
        return res.status(200).send(MessageUtil.success("Data ditemukan",output));
    }

    public async DeletePendidikan(body : any, res : Response){
        let find = await getRepository(Pendidikan).findOne(body.id);
        if(find){
            let output = await getRepository(Pendidikan).remove(find);

            return res.status(200).send(MessageUtil.success("Data ID Pendidikan "+body.id+ " has been success delete", output));
        }else{
            return res.status(404).send(MessageUtil.failed("Data Is Not Found", 404));
        }
    }
}