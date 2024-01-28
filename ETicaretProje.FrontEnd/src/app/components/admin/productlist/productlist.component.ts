import { AfterViewInit, Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/Classes/Product';
import { DataTablesModule } from 'angular-datatables';
import { Subject, mergeMap } from 'rxjs';
import { ProductAddComponent } from '../product-add/product-add.component';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { Category } from '../../../models/Classes/Category';
import { response } from 'express';

@Component({
  selector: 'app-productlist',
  standalone: true,
  imports: [CommonModule,DataTablesModule,ProductAddComponent,ReactiveFormsModule,FormsModule],
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css',
  providers: [ProductService],
})
export class ProductlistComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  createProductForm: FormGroup;
  name: string = '';
  description: string = '';
  isActive: boolean = false;
  imageUrl: string = '';
  categoryId: number = 0;
  price: number= 0;
  isModalOpen: boolean = false;
  categories: Category[] = [];
  selectedImage: File | null = null;
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private alertifyMessageService: AlertifyMessageService,
    private fb: FormBuilder
  ) {
    this.createProductForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      imageUrl: ['', Validators.required],
      categoryId: ['', Validators.required],
      price: ['', Validators.required],
      isActive: ['', Validators.required]
    });
  }
  productList: Product[] = [];

  ngOnInit(): void {
    this.GetAll();
    this.loadCategories();
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
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
  loadCategories():void {
    this.categoryService.GetAllCategories().subscribe(
      (data) => {
        this.categories = data.resultObjects;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  onImageChange(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedImage = files[0];
    }
  }
  AddProduct(): void {
    if (this.selectedImage) {
      this.productService.uploadImage(this.selectedImage).pipe(
        mergeMap(response => {
          // imageUrl'i ekleyerek Product nesnesini güncelle
          let productdata2: Product = this.createProductForm.value;
          productdata2.imageUrl = response.toString();
          console.log(productdata2);
  
          // AddProduct fonksiyonunu çağır ve bu observable'ı döndür
          return this.productService.AddProduct(productdata2);
        })
      ).subscribe(
        (response) => {
          this.GetAll();
          this.alertifyMessageService.alertSuccess(response.message);
        },
        (error) => {
          this.alertifyMessageService.alertError(error.error.message);
        },
        () => {
          // İşlem tamamlandığında yapılacaklar (isteğe bağlı)
          this.resetForm();
          this.closeModal();
        }
      );
    }
  }
  deleteProduct(productId: number): void {
    // Ürünü silme işlemi
    this.productService.DeleteProduct(productId).subscribe(
      (response) => {
        this.alertifyMessageService.alertSuccess(response.message);
        // Ürün silindikten sonra listeyi güncelle
        this.GetAll();
      },
      (error) => {
        this.alertifyMessageService.alertError(error.error.message);
      }
    );
  }
  resetForm() {
    // Formu sıfırla
    this.name = '';
    this.description = '';
    this.isActive = false;
    this.imageUrl = '';
    this.categoryId = 0;
    this.price = 0;
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  openImageLink(event: Event): void {
    //event.preventDefault(); // Varsayılan davranışı engelle
    // Diğer işlemleri burada gerçekleştir
    // Örneğin, window.open ile yeni bir pencere açabilir veya belirli bir servisi çağırabilirsiniz.
  }
}
