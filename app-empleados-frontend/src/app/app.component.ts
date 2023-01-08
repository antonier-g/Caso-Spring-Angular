import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnterprisesService } from './services/enterprises/enterprises.service';
import { DepartamentsService } from './services/departaments/departaments.service';
import { EmployeesService } from './services/employees/employees.service';
import { DepempsService } from './services/depemps/depemps.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  departamentForm: FormGroup;
  enterprises: any;
  departaments: any;

  constructor(
    public fb: FormBuilder,
    public enterprisesService: EnterprisesService,
    public departamentsService: DepartamentsService,
    public employeesService: EmployeesService,
    public depempsService: DepempsService,

  ) {

  }


  ngOnInit(): void {

    this.departamentForm = this.fb.group({
      id: [''],
      //create_by: [''],
      create_by: 'user',
      //create_date: [''],
      create_date: new Date(),
      modified_by: [''],
      modified_date: [''],
      status: ['', Validators.required],
      description: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      enterprise: ['', Validators.required],
    });;


    this.enterprisesService.getAllEnterprises().subscribe(resp => {
      this.enterprises = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    );

    this.departamentsService.getAllDepartaments().subscribe(resp => {
      this.departaments = resp;
      console.log(resp);
    },
      error => { console.error(error) }
    );

  }

  guardar(): void {
    this.departamentsService.saveDepartaments(this.departamentForm.value).subscribe(resp => {
      this.departamentForm.reset();

      this.departaments = this.departaments.filter((departament: { id: any; }) => resp.id !== departament.id);

      this.departaments.push(resp);
    }, error => { console.error(error) }
    )
  }

  editar(departament: any): void {
    this.departamentForm.setValue({
      id: departament.id,
      create_by: departament.create_by,
      create_date: departament.create_date,
      modified_by: departament.modified_by,
      modified_date: departament.modified_date,
      status: departament.status,
      description: departament.description,
      name: departament.name,
      phone: departament.phone,
      enterprise: departament.enterprise,

    })
  }



}
