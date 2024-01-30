import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Customer } from '../../../models/Classes/Customer';
import { Order } from '../../../models/Classes/Order';
import { AlertifyMessageService } from '../../../services/alertify-message.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
  providers: [CartService],
})
export class CheckoutComponent implements OnInit {
  customer: any;
  cartProductList: any;
  order:any;
  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private alertifyMessageService: AlertifyMessageService
  ) {
    this.customer = this.authService.getCustomer();
    console.log(this.customer);
  }
  ngOnInit(): void {
    this.GetCartProducts();
  }
  GetCartProducts() {
    let cartId = this.customer.cartId;
    return this.cartService.GetCartProducts(cartId).subscribe(
      (data) => {
        this.cartProductList = data.resultObjects;
        console.log(this.cartProductList);
        //this.dtTrigger.next(this.productList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  calculateSubtotal(): number {
    if (this.cartProductList) {
      return this.cartProductList.reduce((acc:number, item:any) => acc + (item.price * item.quantity), 0);
    } else {
      return 0;
    }
  }
  
  createOrder(){
    const customer = this.authService.getCustomer();
    this.order = new Order(); 
    this.order.cartProducts = this.cartProductList;
    console.log(this.order.cartProducts);
    this.order.customerId = customer.id;
    this.order.createdDate = new Date().toISOString();
    let ord:Order= this.order;
    console.log(ord);
    this.cartService.createOrder(ord).subscribe(
      (response) => {
        // İstek başarılı olduğunda burası çalışır
        if (response.success == true) {
          this.alertifyMessageService.alertSuccess(response.message);
          console.log(response);
        }
      },
      (error) => {
        // İstek hata ile sonuçlandığında burası çalışır
        this.alertifyMessageService.alertError(error.error.message);
      }
    );
  }
  
}
