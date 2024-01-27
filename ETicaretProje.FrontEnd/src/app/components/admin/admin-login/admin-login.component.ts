import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminLoginService } from '../../../services/admin-login.service';
import { UserLoginDto } from '../../../models/Dtos/UserLoginDto';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { error } from 'console';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AdminFooterComponent, ReactiveFormsModule,RouterModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
  providers:[AdminLoginService]
})
export class AdminLoginComponent {
  AdminLoginForm: FormGroup;
  constructor(private adminLoginService:AdminLoginService,
    private fb: FormBuilder,
     private alertifyMessageService: AlertifyMessageService,
     private router: Router) {
    this.AdminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  // Public olarak tanımlanan fonksiyon
  AdminLoginSubmit(): void {
    const formData: UserLoginDto = this.AdminLoginForm.value;

    // Servis üzerinden API'ye istek gönderin
    this.adminLoginService.AdminLoginSubmit(formData)
    .subscribe(
      (response) => {
        // İstek başarılı olduğunda burası çalışır
        if(response.success == true){
          this.router.navigate(['/admin/productlist']); // Yönlendirilecek sayfanın yolunu belirtin
          this.alertifyMessageService.alertSuccess(response.message);
        }
      },
      (error) => {
        // İstek hata ile sonuçlandığında burası çalışır
        this.alertifyMessageService.alertError(error.error.message);
      }
    );
  }
}