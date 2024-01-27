import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  GetAllProducts(): Observable<any> {
    const apiUrl = `${this.apiUrl}/Product/GetAll`;
    return this.httpClient.get<any>(apiUrl);
  }
}
