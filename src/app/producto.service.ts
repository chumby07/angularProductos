import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { rutas } from './config';

@Injectable()
export class ProductoService {

  constructor(private _http:HttpClient) { }

  listar_productos():Observable<any[]>{
    return this._http.get<any[]>(`${rutas.ruta}?productos`);
  }

}
