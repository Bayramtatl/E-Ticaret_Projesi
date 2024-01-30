import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CartService } from '../../../services/cart.service';
import { CartProduct } from '../../../models/Classes/CartProduct';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
  providers:[CartService]
})
export class CartComponent implements OnInit {
  cartProductList: CartProduct[] = [];
  total: number = 0;
  constructor(private cartService: CartService,
    private authService: AuthService) {
    
  }
  ngOnInit(): void {
    this.GetCartProducts();
  }
  GetCartProducts(){
    let customer = this.authService.getCustomer();
    let cartId = customer.cartId;
    return this.cartService.GetCartProducts(cartId).subscribe(
      (data) => {
        this.cartProductList = data.resultObjects;
        //this.dtTrigger.next(this.productList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  updateTotal() {
    this.total = this.cartProductList.reduce((acc, product) => acc + this.calculateProductTotal(product), 0);
  }

  // Add this function to calculate the total for a specific product
  calculateProductTotal(product: CartProduct): number {
    return product.price * product.quantity;
  }

}
