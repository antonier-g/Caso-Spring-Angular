import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departament } from '../departament';
import { DepartamentService } from '../departament.service';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-registrar-departaments',
  templateUrl: './registrar-departaments.component.html',
  styleUrls: ['./registrar-departaments.component.css']
})
export class RegistrarDepartamentsComponent implements OnInit {

  enterprises: Enterprise[]

  departament: Departament = new Departament();

  constructor(private enterpriseServicio: EnterpriseService,
    private departamentService: DepartamentService,
    private router: Router) { }


  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  onSubmit() {
    //console.log(this.departament);
    this.guardarDepartamento();
  }

  private guardarDepartamento() {
    this.departament.create_by = 'user';
    this.departament.create_date = new Date();
    this.departamentService.registarDepartament(this.departament).subscribe(dato => {
      console.log(dato);
      this.navegarListaDepartamentos();
    }, error => console.log(error)
    );
  }

  private navegarListaDepartamentos() {
    this.router.navigate(['/departaments']);
  }


  private obtenerEmpresas() {
    this.enterpriseServicio.obtenerListaEnterprises().subscribe(dato => {
      this.enterprises = dato;
    });
  }

}

