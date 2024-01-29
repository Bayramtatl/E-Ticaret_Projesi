import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserLoginDto } from '../../../models/Dtos/UserLoginDto';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AdminService } from '../../../services/admin.service';
import { AuthService } from '../../../services/auth.service';
import { Admin } from '../../../models/Classes/Admin';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AdminFooterComponent, ReactiveFormsModule,RouterModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css',
  providers:[AdminService]
})
export class AdminLoginComponent {
  AdminLoginForm: FormGroup;
  constructor(private adminService:AdminService,
    private fb: FormBuilder,
     private alertifyMessageService: AlertifyMessageService,
     private authService: AuthService,
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
    this.adminService.AdminLoginSubmit(formData)
    .subscribe(
      (response) => {
        // İstek başarılı olduğunda burası çalışır
        if(response.success == true){
          this.router.navigate(['/admin/productlist']); // Yönlendirilecek sayfanın yolunu belirtin
          this.alertifyMessageService.alertSuccess(response.message);
          console.log(response)
          var admin: Admin;
          admin = response.resultObject;
          this.authService.loginAdmin(admin);
        }
      },
      (error) => {
        // İstek hata ile sonuçlandığında burası çalışır
        this.alertifyMessageService.alertError(error.error.message);
      }
    );
  }
}