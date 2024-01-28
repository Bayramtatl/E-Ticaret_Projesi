import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { Subject } from 'rxjs';
import { Category } from '../../../models/Classes/Category';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [CommonModule, DataTablesModule,FormsModule, ReactiveFormsModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css',
  providers: [CategoryService]
})
export class CategorylistComponent implements OnInit, OnDestroy{
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  isModalOpen: boolean = false;
  categoryName: string = '';
  description: string = '';
  isActive: boolean = false;
  createCategoryForm: FormGroup;
  constructor(
    private categoryService: CategoryService,
    private alertifyMessageService: AlertifyMessageService,
    private fb: FormBuilder
  ) {
    this.createCategoryForm = this.fb.group({
      categoryName: ['', Validators.required],
      description: ['', Validators.required],
      isActive: ['', Validators.required]
    });
  }
  categoryList: Category[] = [];
  ngOnInit(): void {
    this.GetAll();
  }
  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
  GetAll() {
    return this.categoryService.GetAllCategories().subscribe(
      (data) => {
        this.categoryList = data.resultObjects;
        console.log('Categories:', this.categoryList);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
  AddCategory():void{
    const categorydata: Category = this.createCategoryForm.value;
    console.log(this.createCategoryForm.value);
    console.log(categorydata);
    this.categoryService.AddCategory(categorydata).subscribe(
      (response) => {
        this.GetAll();
        this.alertifyMessageService.alertSuccess(response.message);
      },
      (error) => {
        this.alertifyMessageService.alertError(error.error.message);
      }
    );
    this.resetForm();
    this.closeModal();
  }
  deleteCategory(categoryId: number): void {
    // Ürünü silme işlemi
    this.categoryService.DeleteCategory(categoryId).subscribe(
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
    this.categoryName = '';
    this.description = '';
    this.isActive = false;
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
