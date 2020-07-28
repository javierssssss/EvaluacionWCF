import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




import { WebApiService } from './Servicios/web-api.service';
import {HttpClientModule} from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { InicioComponent } from './inicio/inicio.component';

//Services



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WebApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
