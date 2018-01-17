import { Component } from '@angular/core';
import { ProductoService } from '../producto.service';

@Component({
    selector: 'app-listarEmpleados',
    templateUrl: './listar.component.html',
    providers: [ProductoService]
})

export class ListarEmpleadosComponent{

    empleados:Array<any>= [];

    constructor(private empleadosService:ProductoService){
        this.listarEmpleadosComponent();
    }

    listarEmpleadosComponent(){
        this.empleadosService.listarEmpleadosService().subscribe(
            res => {
                this.empleados = res;
            }
        )
    }

}