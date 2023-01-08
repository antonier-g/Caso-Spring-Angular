

import { DepartamentService } from './../departament.service';
import { Departament } from './../departament';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-departaments',
  templateUrl: './actualizar-departaments.component.html',
  styleUrls: ['./actualizar-departaments.component.css']
})
export class ActualizarDepartamentsComponent implements OnInit {


  id: number;
  departament: Departament = new Departament();
  constructor(private departamentService: DepartamentService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.departamentService.obtenerDepartamentoPorId(this.id).subscribe(dato => {
      this.departament = dato;
    }, error => console.log(error));
  }

  navegarListaDeEmpleados() {
    this.router.navigate(['/departaments']);
    //swal('Empleado actualizado',`El empleado ${this.empleado.nombre} ha sido actualizado con exito`,`success`);
  }

  onSubmit() {
    this.departamentService.actualizarDepartament(this.id, this.departament).subscribe(dato => {
      this.navegarListaDeEmpleados();
    }, error => console.log(error));
  }
}
