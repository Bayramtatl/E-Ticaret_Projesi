import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../models/Classes/Product';

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
  AddProduct(product: Product): Observable<any> {
    const apiUrl = `${this.apiUrl}/Product/Add`;
    return this.httpClient.post(apiUrl, product);
  }
  DeleteProduct(id: number): Observable<any> {
    const apiUrl = `${this.apiUrl}/Product/Delete?id=${id}`;
    return this.httpClient.get(apiUrl);
  }
  uploadImage(file: File): Observable<any> {
    const formData: FormData = new FormData();
    const options = { responseType: 'text' as 'json' };
    formData.append('file', file, file.name);
    const apiUrl = `${this.apiUrl}/Product/UploadImage`;
    return this.httpClient.post(apiUrl, formData,options);
  }
}
