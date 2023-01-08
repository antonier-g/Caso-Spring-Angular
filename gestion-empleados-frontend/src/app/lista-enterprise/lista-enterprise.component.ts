import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enterprise } from '../enterprise';
import { EnterpriseService } from '../enterprise.service';

@Component({
  selector: 'app-lista-enterprise',
  templateUrl: './lista-enterprise.component.html',
  styleUrls: ['./lista-enterprise.component.css']
})

export class ListaEnterpriseComponent implements OnInit {
  enterprises: Enterprise[]

  constructor(private enterpriseServicio: EnterpriseService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpresas();
  }

  private obtenerEmpresas() {
    this.enterpriseServicio.obtenerListaEnterprises().subscribe(dato => {
      this.enterprises = dato;
    });
  }

  actualizarEnterprise(id: number) {
    this.router.navigate(['actualizar-enterprise', id]);
  }
}