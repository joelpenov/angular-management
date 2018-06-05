import { Injectable } from "@angular/core";
import { IUser } from "../user.models";

@Injectable()
export class AuthenticateUserService{
    currentUser:IUser
    loginUser(userName:string, password:string) {
        this.currentUser={
            firstName:'Joel',
            lastName:'Peña',
            id:1,
            password:password,
            userName:userName
        };
    }

    isAuthenticated():boolean{
        return !!this.currentUser;
    }
}