import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-registrar-enterprises',
  templateUrl: './registrar-enterprises.component.html',
  styleUrls: ['./registrar-enterprises.component.css']
})

export class RegistrarEnterprisesComponent implements OnInit {

  enterprise: Enterprise = new Enterprise();

  constructor(private enterpriseService: EnterpriseService,
    private router: Router) { }


  ngOnInit(): void {
    
  }

  onSubmit() {
    //console.log(this.departament);
    this.guardarEmpresa();
  }

  private guardarEmpresa() {
    this.enterprise.create_by = 'user';
    this.enterprise.create_date = new Date();
    this.enterpriseService.registarEnterprise(this.enterprise).subscribe(dato => {
      console.log(dato);
      this.navegarListaEmpresas();
    }, error => console.log(error)
    );
  }

  private navegarListaEmpresas() {
    this.router.navigate(['/enterprises']);
    swal('Empresa registrada',`La empresa ${this.enterprise.name} ha sido registrada con exito`,`success`);
  }


}

