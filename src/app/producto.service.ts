import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { rutas } from './config';
import 'rxjs/add/operator/map';
import { Contacto } from './contacto/contacto'

const httpOptions = {
  headers: new Headers({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProductoService {


  constructor(private _http:Http) { }

  listar_productos():Observable<any[]>{
    return this._http.get(`${rutas.ruta}?productos`).map(res => res.json());
  }

  detalle_Producto(id:any):Observable<any>{
    return this._http.get(`${rutas.ruta}?idProd=${id}`).map(res => res.json());
  }

  registrarContacto(datos:Contacto):Observable<any>{
    return this._http.post(`${rutas.ruta}?registro`, datos, httpOptions);
  }

  listarTiposPService():Observable<any[]>{
    return this._http.get(`${rutas.ruta}?tipos`).map(res => res.json());
  }

  listarEmpleadosService():Observable<any[]>{
    return this._http.get(`${rutas.rutaEmpleados}?empleados`).map(res => res.json());
  }

  regEmpleadosService(datos:any):Observable<any>{
    return this._http.post(`${rutas.rutaEmpleados}?regEmpleados`, datos, httpOptions);
  }

  listarEmpleadoService(id:any):Observable<any>{
    return this._http.get(`${rutas.rutaEmpleados}?listEmpleado=${id}`).map(res => res.json());
  }

  modificarEmpleadoService(datos:any):Observable<any>{
    return this._http.post(`${rutas.rutaEmpleados}?modEmpleado`, datos, httpOptions);
  }

  eliminarEmpleadoService(id:any):Observable<any>{
    return this._http.get(`${rutas.rutaEmpleados}?delEmpleado=${id}`);
  }

}
