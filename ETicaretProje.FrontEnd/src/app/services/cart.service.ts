import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CartProduct } from '../models/Classes/CartProduct';
import { Order } from '../models/Classes/Order';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl: string = environment.apiUrl;
  constructor(private httpClient: HttpClient) { }


  addProductToCart(cartProduct: CartProduct): Observable<any> {
    const apiUrl = `${this.apiUrl}/CartProduct/Add`;
    return this.httpClient.post(apiUrl, cartProduct);
  }
  GetCartProducts(id:number): Observable<any> {
    const apiUrl = `${this.apiUrl}/CartProduct/GetByCartId?id=${id}`;
    return this.httpClient.get<any>(apiUrl);
  }
  createOrder(order:Order):Observable<any>{
    const apiUrl = `${this.apiUrl}/Order/Add`;
    return this.httpClient.post(apiUrl,order)
  }
}
