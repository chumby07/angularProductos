import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute } from '@angular/router';
import { AppRoutesModule } from '../app.routes.module';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-modificarEmpleados',
    templateUrl: './modificarEmpleados.component.html',
    providers: [ProductoService]
})

export class ModificarEmpleadosComponent{
    datosEmpleado:any = {};
    _id = this.active.snapshot.paramMap.get('id');

    constructor(private active:ActivatedRoute, private service:ProductoService, private location: Location){
        this.obtenerDatosEmpleado();
    }

    obtenerDatosEmpleado(){

        this.service.listarEmpleadoService(this._id).subscribe(
            res => {
                this.datosEmpleado = res;
                console.log(res);
            }
        )

    }

    modificarEmpleadoComponent(){
        this.service.modificarEmpleadoService(this.datosEmpleado).subscribe(
            res => {
                this.location.back();
                console.log(res);
            },
            error => {
                console.log(error);
            }
        )
    }

    get a(){
        return JSON.stringify(this.datosEmpleado);
    }
}