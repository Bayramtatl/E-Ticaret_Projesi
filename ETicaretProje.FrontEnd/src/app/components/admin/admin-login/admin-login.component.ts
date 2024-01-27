import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminLoginService } from '../../../services/admin-login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AdminFooterComponent, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
  providers:[AdminLoginService]
})
export class AdminLoginComponent {
  constructor(private adminLoginService:AdminLoginService ) {
  }
  AdminLoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  // Public olarak tanımlanan fonksiyon
  AdminLoginSubmit(): void {
    this.adminLoginService.AdminLoginSubmit(this.AdminLoginForm);
  }
}