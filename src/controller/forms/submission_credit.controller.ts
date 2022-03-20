import { Request, Response } from "express";
import { SubmissionCreditAddDto } from "../../dto/forms/submission-credit/add.dto";
import { ValidateBodyHelper } from "../../lib/helper/validate_body.helper";
import { MessageUtil } from "../../lib/util/message.util";
import { SubmissionCreditModel } from "../../model/forms/submission_credit.model";



export class SubmissionCreditController{

    
    public SubmissionCreditAddController(req : Request, res : Response){


        const model = new SubmissionCreditModel;
        let validate = new ValidateBodyHelper;
        let validate_body = validate.validate(req.body, SubmissionCreditAddDto, res, req);
        if(validate_body){
            return validate_body;
        }

        
        let field_file : any = req.files;
        if(!field_file?.foto_ktp){
            return res.status(400).send(MessageUtil.failed("Field foto_ktp is required add data", 400));
        }
        if(!field_file?.foto_kk){
            return res.status(400).send(MessageUtil.failed("Field foto_kk is required add data", 400));
        }
        if(!field_file?.foto_wajah){
            return res.status(400).send(MessageUtil.failed("Field foto_wajah is required add data", 400));
        }
        if(!field_file?.foto_sk_domisili_pbb){
            return res.status(400).send(MessageUtil.failed("Field foto_sk_domisili_pbb is required add data", 400));
        }
        
        if(req.body.status_kebijakan == "false" || req.body.status_kebijakan == ""){
            return res.status(403).send(MessageUtil.failed("Harap setujui data yang akan anda kirimkan saat ini", 403));
        }

        return model.AddSubmissionCredit(req, res);
    }

    public SubmissionCreditSelectController(req : Request, res : Response){
        const model = new SubmissionCreditModel;
        return model.SelectSubmissionCredit(req.body, res);
    }
}