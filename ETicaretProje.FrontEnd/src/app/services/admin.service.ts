import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginDto } from '../models/Dtos/UserLoginDto';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';
import { Admin } from '../models/Classes/Admin';

@Injectable()
export class AdminService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  AdminLoginSubmit(AdminLoginForm: UserLoginDto): Observable<any> {
    const apiUrl = `${this.apiUrl}/Admin/Login`;
    return this.httpClient.post(apiUrl, AdminLoginForm);
  }
  GetById(id:number): Observable<any> {
    const apiUrl = `${this.apiUrl}/Admin/Login`;
    return this.httpClient.post(apiUrl, id);
  }
  UpdateAdmin(admin: Admin): Observable<any> {
    const apiUrl = `${this.apiUrl}/Admin/Update`;
    return this.httpClient.post(apiUrl, admin);
  }
}
