import { Component } from '@angular/core';
import { Contacto } from './contacto';
import { ProductoService } from '../producto.service'
import { error } from 'util';

@Component({
    selector: 'app-contacto',
    templateUrl: './contacto.component.html',
    styleUrls: ['contacto.component.css'],
    providers: [ProductoService]
})

export class ContactoComponent{

    constructor(private contactoService: ProductoService){
    }

    ngOnInit(){
        this.listarTiposComponent();
    }

    tipos: Array<any> = [];
    contacto = new Contacto();

    enviarContacto(){
        this.contactoService.registrarContacto(this.contacto).subscribe(
            res => {
                console.log(res);
            },
            error => {
                console.log(error);
            }
        )
    }

    listarTiposComponent(){
        this.contactoService.listarTiposPService().subscribe(
            res => {
                this.tipos = res;
            },
            error => {
                console.log("Error");
            },
            () => {
                console.log("Peticion finalizada");
            }
        )
    }

    get returnocontacto(){
       return  JSON.stringify(this.contacto);
    }

}