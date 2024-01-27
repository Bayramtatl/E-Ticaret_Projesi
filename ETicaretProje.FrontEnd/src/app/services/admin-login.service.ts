import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserLoginDto } from '../models/Dtos/UserLoginDto';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class AdminLoginService {
  apiUrl = 'https://localhost:44324/api/Admin/Login';
  constructor(private httpClient: HttpClient) { }


  AdminLoginSubmit(AdminLoginForm: UserLoginDto): Observable<any> {
    return this.httpClient.post(this.apiUrl, AdminLoginForm);
  }
}
