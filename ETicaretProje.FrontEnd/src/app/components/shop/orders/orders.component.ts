import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { AuthService } from '../../../services/auth.service';
import { Order } from '../../../models/Classes/Order';
import { CommonModule } from '@angular/common';
import { CartProduct } from '../../../models/Classes/CartProduct';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
  providers: [CartService],
})
export class OrdersComponent implements OnInit {
  customer: any;
  orders: Order[] = [];
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.customer = this.authService.getCustomer();
  }
  ngOnInit(): void {
    this.getOrders();
    console.log(this.customer.id);
  }
  getOrders() {
    return this.cartService.getOrdersByCustomerId(this.customer.id).subscribe(
      (data) => {
        this.orders = data.resultObjects;
        console.log(this.orders);
        //this.dtTrigger.next(this.productList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  calculateTotal(cartProducts: any): number {
    let total = 0;

    for (const item of cartProducts) {
      total += item.price * item.quantity;
    }
    total += 45;
    return total;
  }
}
