import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserRegisterDto } from '../models/Dtos/UserRegisterDto';
import { Observable } from 'rxjs';
import { UserLoginDto } from '../models/Dtos/UserLoginDto';
import { Customer } from '../models/Classes/Customer';
import { Address } from 'cluster';

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
  getAdressByCustomerId(id: number): Observable<any> {
    const apiUrl = `${this.apiUrl}/Adress/GetByCustomerId?id=${id}`;
    return this.httpClient.get(apiUrl);
  }
  Update(customer: Customer): Observable<any> {
    const apiUrl = `${this.apiUrl}/Customer/Update`;
    return this.httpClient.post(apiUrl, customer);
  }
  UpdateAdress(adress: Address): Observable<any> {
    const apiUrl = `${this.apiUrl}/Adress/Update`;
    return this.httpClient.post(apiUrl, adress);
  }
}
