import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDepartamentsComponent } from './lista-departaments/lista-departaments.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarDepartamentsComponent } from './registrar-departaments/registrar-departaments.component';
import { FormsModule } from '@angular/forms';
import { ActualizarDepartamentsComponent } from './actualizar-departaments/actualizar-departaments.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDepartamentsComponent,
    RegistrarDepartamentsComponent,
    ActualizarDepartamentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
