import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginDto } from '../models/Dtos/UserLoginDto';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../environments/environment';

@Injectable()
export class AdminService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  AdminLoginSubmit(AdminLoginForm: UserLoginDto): Observable<any> {
    const apiUrl = `${this.apiUrl}/Admin/Login`;
    return this.httpClient.post(apiUrl, AdminLoginForm);
  }
}
