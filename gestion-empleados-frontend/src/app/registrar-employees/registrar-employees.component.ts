import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-registrar-employees',
  templateUrl: './registrar-employees.component.html',
  styleUrls: ['./registrar-employees.component.css']
})


export class RegistrarEmployeesComponent implements OnInit {

  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private router: Router) { }


  ngOnInit(): void {

  }

  onSubmit() {
    //console.log(this.departament);
    this.guardarEmpleado();
  }

  private guardarEmpleado() {
    this.employee.create_by = 'user';
    this.employee.create_date = new Date();
    this.employeeService.registarEmployee(this.employee).subscribe(dato => {
      console.log(dato);
      this.navegarListaEmpleados();
    }, error => console.log(error)
    );
  }

  private navegarListaEmpleados() {
    this.router.navigate(['/employees']);
    swal('Empleado registrado', `El empleado ${this.employee.name} ha sido registrado con exito`, `success`);
  }


}

