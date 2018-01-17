import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { rutas } from './config';
import { Contacto } from './contacto/contacto'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductoService {


  constructor(private _http:HttpClient) { }

  listar_productos():Observable<any[]>{
    return this._http.get<any[]>(`${rutas.ruta}?productos`);
  }

  detalle_Producto(id:any):Observable<any>{
    return this._http.get<any>(`${rutas.ruta}?idProd=${id}`);
  }

  registrarContacto(datos:Contacto):Observable<any>{
    return this._http.post(`${rutas.ruta}?registro`, datos, httpOptions);
  }

  listarTiposPService():Observable<any[]>{
    return this._http.get<any[]>(`${rutas.ruta}?tipos`);
  }

  listarEmpleadosService():Observable<any[]>{
    return this._http.get<any[]>(`${rutas.rutaEmpleados}?empleados`);
  }

  regEmpleadosService(datos:any):Observable<any>{
    return this._http.post(`${rutas.rutaEmpleados}?regEmpleados`, datos, httpOptions);
  }

}
