import { Component } from "@angular/core";
import { ProductoService } from "../producto.service";
import { error } from "util";

@Component({
    selector: 'app-regEmpleados',
    templateUrl: './registrar.component.html',
    providers: [ProductoService]
})

export class RegEmpleadosComponent{

    constructor(private regEmpleados:ProductoService){

    }

    datosEmpleado:any = {};

    regEmpleadosComponent(){
        this.regEmpleados.regEmpleadosService(this.datosEmpleado).subscribe(
            res => {
                console.log(res);
            },
            error => {
                console.log(error);
            }
        )
    }

}