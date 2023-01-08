import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaDepartamentsComponent } from './lista-departaments/lista-departaments.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarDepartamentsComponent } from './registrar-departaments/registrar-departaments.component';
import { FormsModule } from '@angular/forms';
import { ActualizarDepartamentsComponent } from './actualizar-departaments/actualizar-departaments.component';
import { ListaEnterpriseComponent } from './lista-enterprise/lista-enterprise.component';
import { RegistrarEnterprisesComponent } from './registrar-enterprises/registrar-enterprises.component';
import { ActualizarEnterprisesComponent } from './actualizar-enterprises/actualizar-enterprises.component';
import { ListaEmployeesComponent } from './lista-employees/lista-employees.component';
import { RegistrarEmployeesComponent } from './registrar-employees/registrar-employees.component';
import { ActualizarEmployeesComponent } from './actualizar-employees/actualizar-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaDepartamentsComponent,
    RegistrarDepartamentsComponent,
    ActualizarDepartamentsComponent,
    ListaEnterpriseComponent,
    RegistrarEnterprisesComponent,
    ActualizarEnterprisesComponent,
    ListaEmployeesComponent,
    RegistrarEmployeesComponent,
    ActualizarEmployeesComponent
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
