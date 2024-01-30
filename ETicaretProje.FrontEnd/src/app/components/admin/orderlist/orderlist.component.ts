import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Order } from '../../../models/Classes/Order';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-orderlist',
  standalone: true,
  imports: [CommonModule,DataTablesModule],
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css',
  providers: [CartService]
})
export class OrderlistComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  orderList: Order[] = [];
  constructor(private cartService: CartService){}
ngOnInit(): void {
  this.getOrders();
}
  getOrders(){
    return this.cartService.getAllOrders().subscribe(
      (data) => {
        this.orderList = data.resultObjects;
        console.log(this.orderList);
        this.dtTrigger.next(data.resultObjects);
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

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
