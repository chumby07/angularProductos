import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ListarEmpleadosComponent } from './empleados/listar.component';
import { RegEmpleadosComponent } from './empleados/registrar.component';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: 'contacto', component: ContactoComponent },
    {
        path: 'empleados', component: EmpleadosComponent,
        children: [
            { path: 'listar', component: ListarEmpleadosComponent },
            { path: 'registrar', component: RegEmpleadosComponent }
        ]
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRoutes)
    ]
})
export class AppRoutesModule { }
