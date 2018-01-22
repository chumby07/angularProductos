import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { AppRoutesModule } from '../app.routes.module';
import { Router } from '@angular/router';
import { UserService } from '../user.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: ['./login.component.css'],
    providers: [ProductoService]
})

export class LoginComponent{

    constructor(private service:ProductoService, private route:Router, private user:UserService){

    }

    datosLogin:any = {};

    login(){
        console.log(this.datosLogin);
        this.service.loginUserService(this.datosLogin).subscribe(
            res => {
                console.log(res);
                if(res._body == '1'){
                    this.user.setUsserLogin();
                    this.route.navigate(['/home']);  
                }else{
                    this.route.navigate(['login']);
                }
            }
        )
    }
    
}