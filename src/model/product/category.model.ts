import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Category } from "../../entity/product/category.entity";
import { MessageUtil } from "../../lib/util/message.util";



export class CategoryModel{
    public async AddCategory(body : any, res : Response){

        let cek = await getRepository(Category).findOne(body);
        if(!cek){

        const newAccount = getRepository(Category).create(body);        
        const result = await getRepository(Category).save(newAccount);
        return res.status(200).send(MessageUtil.success("Data berhasil disimpan",result));
        }else{
            return res.status(200).send(MessageUtil.failed("Data Already Exist", 200));
        }
    }

    public async UpdateCategory(body : any, res : Response){
        let find = await getRepository(Category).findOne(body.id);
        if(find){
            find.nama_kategori = body.nama_kategori;
            find.kode_kategori = body.kode_kategori;
            find.icon = body.icon;
            let output = await getRepository(Category).save(find);

            return res.status(200).send(MessageUtil.success("Data ID Kategori "+body.id+ " has been success updated", output));
        }else{
            return res.status(404).send(MessageUtil.failed("Data Is Not Found", 404));
        }
    }

    public async SelectAllCategory(req : Request, res : Response){
        let output = await getRepository(Category).find(req.body);
        if(output.length == 0){
            return res.status(404).send(MessageUtil.failed("Data tidak ditemukan", 404));
        }
        return res.status(200).send(MessageUtil.success("Data ditemukan",output));
    }

    public async DeleteCategory(body : any, res : Response){
        let find = await getRepository(Category).findOne(body.id);
        if(find){
            let output = await getRepository(Category).remove(find);

            return res.status(200).send(MessageUtil.success("Data ID Kategori "+body.id+ " has been success delete", output));
        }else{
            return res.status(404).send(MessageUtil.failed("Data Is Not Found", 404));
        }
    }
}