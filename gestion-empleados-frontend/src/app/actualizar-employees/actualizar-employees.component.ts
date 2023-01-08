import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import swal from 'sweetalert2';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-actualizar-employees',
  templateUrl: './actualizar-employees.component.html',
  styleUrls: ['./actualizar-employees.component.css']
})

export class ActualizarEmployeesComponent implements OnInit {


  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.obtenerEmployeePorId(this.id).subscribe(dato => {
      this.employee = dato;
    }, error => console.log(error));
  }

  navegarListaDeEmpleados() {
    this.router.navigate(['/employees']);
    swal('Empleado actualizado', `El empleado ${this.employee.name} ha sido actualizado con exito`, `success`);
  }

  onSubmit() {
    this.employeeService.actualizarEmployee(this.id, this.employee).subscribe(dato => {
      this.navegarListaDeEmpleados();
    }, error => console.log(error));
  }
}