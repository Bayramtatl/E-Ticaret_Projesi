import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserRegisterDto } from '../models/Dtos/UserRegisterDto';
import { Observable } from 'rxjs';
import { UserLoginDto } from '../models/Dtos/UserLoginDto';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  Register(RegisterForm: UserRegisterDto): Observable<any> {
    const apiUrl = `${this.apiUrl}/Customer/Register`;
    return this.httpClient.post(apiUrl, RegisterForm);
  }
  Login(LoginForm: UserLoginDto): Observable<any> {
    const apiUrl = `${this.apiUrl}/Customer/Login`;
    return this.httpClient.post(apiUrl, LoginForm);
  }
}
