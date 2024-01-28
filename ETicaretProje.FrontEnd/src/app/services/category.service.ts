import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/Classes/Category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }

  GetAllCategories(): Observable<any> {
    const apiUrl = `${this.apiUrl}/Category/GetAll`;
    return this.httpClient.get<any>(apiUrl);
  }
  AddCategory(category: Category): Observable<any> {
    const apiUrl = `${this.apiUrl}/Category/Add`;
    return this.httpClient.post(apiUrl, category);
  }
  DeleteCategory(id: number): Observable<any> {
    const apiUrl = `${this.apiUrl}/Category/Delete?id=${id}`;
    return this.httpClient.get(apiUrl);
  }
}
