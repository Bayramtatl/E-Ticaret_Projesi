import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { UserRegisterDto } from '../models/Dtos/UserRegisterDto';
import { Observable } from 'rxjs';

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
}
