
export class MessageUtil{

    public static success(msg : any, data : any){
        let m = {
            message : msg,
            data : data,
            status : "success"
        }

        return m;
    }
    
    public static failed(msg : any, code : number){
        let m = {
            message : msg,
            code : code,
            status : "failed"
        }

        return m;
    }
}