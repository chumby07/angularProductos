import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { DetalleComponent } from './detalle/detalle.component';

const appRoutes:Routes = [
    {path: 'home', component: AppComponent},
    {path: 'detalle/id', component: DetalleComponent},
    {path:'', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    exports: [
        RouterModule
      ],
      imports: [
        RouterModule.forRoot(appRoutes)
      ]
})
export class AppRoutesModule{}
