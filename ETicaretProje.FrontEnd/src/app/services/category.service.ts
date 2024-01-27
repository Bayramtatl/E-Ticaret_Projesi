import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
