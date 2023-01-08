import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarDepartamentsComponent } from './actualizar-departaments/actualizar-departaments.component';
import { ActualizarEmployeesComponent } from './actualizar-employees/actualizar-employees.component';
import { ActualizarEnterprisesComponent } from './actualizar-enterprises/actualizar-enterprises.component';
import { ListaDepartamentsComponent } from './lista-departaments/lista-departaments.component';
import { ListaEmployeesComponent } from './lista-employees/lista-employees.component';
import { ListaEnterpriseComponent } from './lista-enterprise/lista-enterprise.component';
import { RegistrarDepartamentsComponent } from './registrar-departaments/registrar-departaments.component';
import { RegistrarEmployeesComponent } from './registrar-employees/registrar-employees.component';
import { RegistrarEnterprisesComponent } from './registrar-enterprises/registrar-enterprises.component';

const routes: Routes = [
  {path: 'departaments', component:ListaDepartamentsComponent},
  {path: '', redirectTo: 'departaments', pathMatch: 'full'},
  {path: 'registrar-departament', component:RegistrarDepartamentsComponent},
  {path: 'actualizar-departament/:id', component:ActualizarDepartamentsComponent},

  {path: 'enterprises', component:ListaEnterpriseComponent},
  {path: 'registrar-enterprise', component:RegistrarEnterprisesComponent},
  {path: 'actualizar-enterprise/:id', component:ActualizarEnterprisesComponent},

  {path: 'employees', component:ListaEmployeesComponent},
  {path: 'registrar-employee', component:RegistrarEmployeesComponent},
  {path: 'actualizar-employee/:id', component:ActualizarEmployeesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
