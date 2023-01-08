import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActualizarDepartamentsComponent } from './actualizar-departaments/actualizar-departaments.component';
import { ListaDepartamentsComponent } from './lista-departaments/lista-departaments.component';
import { RegistrarDepartamentsComponent } from './registrar-departaments/registrar-departaments.component';

const routes: Routes = [
  {path: 'departaments', component:ListaDepartamentsComponent},
  {path: '', redirectTo: 'departaments', pathMatch: 'full'},
  {path: 'registrar-departament', component:RegistrarDepartamentsComponent},
  {path: 'actualizar-departament/:id', component:ActualizarDepartamentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
