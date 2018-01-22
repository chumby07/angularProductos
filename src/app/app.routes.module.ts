import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HomeComponent } from './home/home.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { ListarEmpleadosComponent } from './empleados/listar.component';
import { RegEmpleadosComponent } from './empleados/registrar.component';
import { ModificarEmpleadosComponent } from './empleados/modificarEmpleados.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './user.service';
import { AuthguardGuard } from './authguard.guard';

const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'home', canActivate: [AuthguardGuard], component: HomeComponent },
    { path: 'detalle/:id', canActivate: [AuthguardGuard], component: DetalleComponent },
    { path: 'contacto', canActivate: [AuthguardGuard], component: ContactoComponent },
    {
        path: 'empleados', canActivate: [AuthguardGuard], component: EmpleadosComponent,
        children: [
            {
                path: 'listar',
                children: [
                    {path: '', canActivate: [AuthguardGuard], component: ListarEmpleadosComponent},
                    {path: 'listar/:id', canActivate: [AuthguardGuard], component: ListarEmpleadosComponent},
                    { path: 'modificar/:id', canActivate: [AuthguardGuard], component: ModificarEmpleadosComponent }
                ]
            },
            { path: 'registrar', canActivate: [AuthguardGuard], component: RegEmpleadosComponent }
        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
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
