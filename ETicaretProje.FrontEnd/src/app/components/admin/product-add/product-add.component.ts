import { Component } from '@angular/core';
import { Product } from '../../../models/Classes/Product';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  newProduct: any; // Yeni ürün bilgilerini tutacak nesne

  addProduct() {
    // Burada yeni ürünü eklemek için gerekli işlemleri yapabilirsiniz
    // Örneğin, productList dizisine yeni ürünü ekleyebilir veya bir API'ye gönderebilirsiniz
    console.log('Yeni Ürün:', this.newProduct);
  }
}
