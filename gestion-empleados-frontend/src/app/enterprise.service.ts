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

}

