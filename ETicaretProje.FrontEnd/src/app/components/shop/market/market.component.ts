import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/Classes/Product';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { CartService } from '../../../services/cart.service';
import { Admin } from '../../../models/Classes/Admin';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { CartProduct } from '../../../models/Classes/CartProduct';
import { AuthService } from '../../../services/auth.service';
@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css',
  providers: [ProductService, CartService],
})
export class MarketComponent implements OnInit {
  productList: Product[] = [];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private authService: AuthService,
    private alertifyMessageService: AlertifyMessageService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    return this.productService.GetAllProducts().subscribe(
      (data) => {
        this.productList = data.resultObjects;
        //this.dtTrigger.next(this.productList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  addToCard(productId:number,productName:string,price:number) {
    const customer = this.authService.getCustomer();
    if(customer == null){
      this.router.navigate(['/shop/login']);
    }
    console.log(customer)
    let cartProduct = new CartProduct(productId,productName,price,customer.cartId,1);

    this.cartService.addProductToCart(cartProduct).subscribe(
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
