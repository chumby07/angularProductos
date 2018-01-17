import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html',
    styleUrls: ['detalle.component.css'],
    providers: [ProductoService]
})
export class DetalleComponent{

    producto:any={};

    constructor(private active:ActivatedRoute, private service:ProductoService){
        this.obtener_Producto();
    }

    obtener_Producto(){
        
        let _id = this.active.snapshot.paramMap.get('id');

        this.service.detalle_Producto(_id).subscribe(
            res => {
                this.producto = res;
              
            }
        );

    }

}