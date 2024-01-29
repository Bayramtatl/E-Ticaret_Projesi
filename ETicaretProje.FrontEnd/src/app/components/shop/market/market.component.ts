import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../models/Classes/Product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-market',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './market.component.html',
  styleUrl: './market.component.css',
  providers: [ProductService]
})
export class MarketComponent implements OnInit {
productList : Product[] = [];
constructor(private productService:ProductService){}
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
}
