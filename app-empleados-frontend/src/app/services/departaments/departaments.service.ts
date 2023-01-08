import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentsService {

  private API_SERVER = "http://localhost:8888/departament/";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllDepartaments(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public saveDepartaments(departament:any): Observable<any> {
    return this.httpClient.post(this.API_SERVER,departament);
  }

}
