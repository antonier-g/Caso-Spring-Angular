import { Component, OnInit } from '@angular/core';
import { Departament } from './../departament';
import { DepartamentService } from '../departament.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-departaments',
  templateUrl: './lista-departaments.component.html',
  styleUrls: ['./lista-departaments.component.css']
})

export class ListaDepartamentsComponent implements OnInit {
  departaments: Departament[]

  constructor(private departamentServicio: DepartamentService,
    private router:Router) { }

  ngOnInit(): void {
    this.obtenerDepartamentos();
  }

  private obtenerDepartamentos() {
    this.departamentServicio.obtenerListaDepartaments().subscribe(dato => {
      this.departaments = dato;
    });
  }

  actualizarDepartament(id:number) {
    this.router.navigate(['actualizar-departament',id]);
  }



}