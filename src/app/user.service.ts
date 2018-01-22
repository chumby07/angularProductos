import { Injectable } from '@angular/core'

@Injectable()
export class UserService{

    private isUsserLogin;
    private username;
    constructor(){
        this.isUsserLogin = false;
    }

    setUsserLogin(){
        return this.isUsserLogin = true;
    }

    getUsserLogin(){
        return this.isUsserLogin;
    }

}