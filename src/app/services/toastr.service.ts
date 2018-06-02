import { Injectable } from "@angular/core";
import { debug } from "util";

declare let toastr:any

@Injectable()
export class ToastrService{

    constructor() {
        toastr.options={
            progressBar:true
        }        
    }

    info(message:string, title?:string):void{
        toastr.info(message, title);
    }
    warning(message:string, title?:string):void{
        toastr.warning(message, title);
    }
    success(message:string, title?:string):void{
        toastr.success(message, title);
    }
    error(message:string, title?:string):void{
        toastr.error(message, title);
    }
}