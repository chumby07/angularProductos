import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { JumboComponent } from './jumbo/jumbo.component';
import { CarpComponent } from './carp/carp.component';
import { DetalleComponent } from './detalle/detalle.component';
import { AppRoutesModule } from './app.routes.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JumboComponent,
    CarpComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
