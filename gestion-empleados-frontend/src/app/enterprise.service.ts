import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Enterprise } from './enterprise';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private baseURL = "http://localhost:8888/enterprise/";

  constructor(private httpClient: HttpClient) { }

  //obtiene las empresas
  public obtenerListaEnterprises(): Observable<Enterprise[]> {
    return this.httpClient.get<Enterprise[]>(`${this.baseURL}`);
  }

  //registar empresa
  public registarEnterprise(enterprise: Enterprise): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`,enterprise);
  }

  //actualizar empresa
  public actualizarEnterprise(id: number, enterprise:Enterprise): Observable<Object> {
    //return this.httpClient.put(`${this.baseURL}/${id}`,enterprise);
    return this.httpClient.put(`${this.baseURL}${id}`,enterprise);
  }

  //este metodo sirve para obtener o buscar una empresa
  public obtenerEnterprisePorId(id:number):Observable<Enterprise>{
    //return this.httpClient.get<Enterprise>(`${this.baseURL}/${id}`);
    return this.httpClient.get<Enterprise>(`${this.baseURL}${id}`);
  }
}

