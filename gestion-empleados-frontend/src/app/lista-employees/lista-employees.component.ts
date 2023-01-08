import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-lista-employees',
  templateUrl: './lista-employees.component.html',
  styleUrls: ['./lista-employees.component.css']
})

export class ListaEmployeesComponent implements OnInit {
  employees: Employee[]

  constructor(private employeeeServicio: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.obtenerEmpleados();
  }

  private obtenerEmpleados() {
    this.employeeeServicio.obtenerListaEmployees().subscribe(dato => {
      this.employees = dato;
    });
  }

  actualizarEmployee(id: number) {
    this.router.navigate(['actualizar-employee', id]);
  }
}
