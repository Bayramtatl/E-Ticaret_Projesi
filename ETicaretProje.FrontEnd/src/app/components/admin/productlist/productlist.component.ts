import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/Classes/Product';
import { DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,DataTablesModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
  providers: [ProductService],
})
export class ProductlistComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  constructor(
    private productService: ProductService,
    private alertifyMessageService: AlertifyMessageService
  ) {}
  productList: Product[] = [];

  ngOnInit(): void {
    this.GetAll();
  }
  GetAll() {
    return this.productService.GetAllProducts().subscribe(
      (data) => {
        this.productList = data.resultObjects;
        this.dtTrigger.next(this.productList);
        console.log('Products:', this.productList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
