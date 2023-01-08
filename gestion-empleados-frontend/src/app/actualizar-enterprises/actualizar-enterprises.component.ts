import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-actualizar-enterprises',
  templateUrl: './actualizar-enterprises.component.html',
  styleUrls: ['./actualizar-enterprises.component.css']
})

export class ActualizarEnterprisesComponent implements OnInit {


  id: number;
  enterprise: Enterprise = new Enterprise();
  constructor(private enterpriseService: EnterpriseService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.enterpriseService.obtenerEnterprisePorId(this.id).subscribe(dato => {
      this.enterprise = dato;
    }, error => console.log(error));
  }

  navegarListaDeEmpresas() {
    this.router.navigate(['/enterprises']);
    swal('Empresa actualizada', `La empresa ${this.enterprise.name} ha sido actualizada con exito`, `success`);
  }

  onSubmit() {
    this.enterpriseService.actualizarEnterprise(this.id, this.enterprise).subscribe(dato => {
      this.navegarListaDeEmpresas();
    }, error => console.log(error));
  }
}