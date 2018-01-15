import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProductoService {

  constructor(private _http:HttpClient) { }

  listar_productos():Observable<any[]>{
    return this._http.get<any[]>('http://localhost/ServerProducto/mostrarProductos.php?productos');
  }

}
