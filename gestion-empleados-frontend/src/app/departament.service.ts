import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Departament } from './departament';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  private baseURL = "http://localhost:8888/departament/";

  constructor(private httpClient: HttpClient) { }

  //obtiene los departamentos
  public obtenerListaDepartaments(): Observable<Departament[]> {
    return this.httpClient.get<Departament[]>(`${this.baseURL}`);
  }

  //registar departamentos
  public registarDepartament(departament: Departament): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,departament);
  }

  //actualizar departamentos
  public actualizarDepartament(id: number, departament:Departament): Observable<Object> {
    //return this.httpClient.put(`${this.baseURL}/${id}`,departament);
    return this.httpClient.put(`${this.baseURL}${id}`,departament);
  }

  //este metodo sirve para obtener o buscar un departamento
  public obtenerDepartamentoPorId(id:number):Observable<Departament>{
    //return this.httpClient.get<Departament>(`${this.baseURL}/${id}`);
    return this.httpClient.get<Departament>(`${this.baseURL}${id}`);
  }

}
