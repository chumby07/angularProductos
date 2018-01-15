import { Component } from '@angular/core';
import {ProductoService} from '../producto.service';

@Component({
    selector: 'app-carp',
    templateUrl: './carp.component.html',
    styleUrls: ['carp.component.css'],
    providers:[ProductoService]
})
export class CarpComponent{

    productos:Array<any> = [];

    constructor(private productoService:ProductoService){
        this.listar_productos()
    }

    listar_productos(){
        this.productoService.listar_productos()
        .subscribe(res => {
            this.productos = res;
        });
    }
}