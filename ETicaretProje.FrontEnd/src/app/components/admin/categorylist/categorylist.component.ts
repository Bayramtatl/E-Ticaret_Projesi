import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { Subject } from 'rxjs';
import { Category } from '../../../models/Classes/Category';

@Component({
  selector: 'app-categorylist',
  standalone: true,
  imports: [CommonModule, DataTablesModule],
  templateUrl: './categorylist.component.html',
  styleUrl: './categorylist.component.css',
  providers: [CategoryService]
})
export class CategorylistComponent implements OnInit, OnDestroy{
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(
    private categoryService: CategoryService,
    private alertifyMessageService: AlertifyMessageService
  ) {}
  categoryList: Category[] = [];
  ngOnInit(): void {
    this.GetAll();
  }

  GetAll() {
    return this.categoryService.GetAllCategories().subscribe(
      (data) => {
        this.categoryList = data.resultObjects;
        this.dtTrigger.next(this.categoryList);
        console.log('Categories:', this.categoryList);
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
