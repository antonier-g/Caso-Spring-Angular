import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {

  private API_SERVER = "http://localhost:8888/enterprise/";
  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllEnterprises(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}
