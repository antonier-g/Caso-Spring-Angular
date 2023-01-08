import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  private baseURL = "http://localhost:8888/employee/";

  constructor(private httpClient: HttpClient) { }

  //obtiene los empleados
  public obtenerListaEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(`${this.baseURL}`);
  }

  //registar empleado
  public registarEmployee(employee: Employee): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,employee);
  }

  //actualizar empleado
  public actualizarEmployee(id: number, employee:Employee): Observable<Object> {
    //return this.httpClient.put(`${this.baseURL}/${id}`,departament);
    return this.httpClient.put(`${this.baseURL}${id}`,employee);
  }

  //este metodo sirve para obtener o buscar un empleado
  public obtenerEmployeePorId(id:number):Observable<Employee>{
    //return this.httpClient.get<Employee>(`${this.baseURL}/${id}`);
    return this.httpClient.get<Employee>(`${this.baseURL}${id}`);
  }

}
