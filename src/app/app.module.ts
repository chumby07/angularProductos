import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { CarpComponent } from './carp/carp.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AppRoutesModule } from './app.routes.module';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FormsModule } from '@angular/forms';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ListarEmpleadosComponent } from './empleados/listar.component';
import { RegEmpleadosComponent } from './empleados/registrar.component';
import { ModificarEmpleadosComponent } from './empleados/modificarEmpleados.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboComponent,
    CarpComponent,
    DetalleComponent,
    HomeComponent,
    ContactoComponent,
    EmpleadosComponent,
    ListarEmpleadosComponent,
    RegEmpleadosComponent,
    ModificarEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutesModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
