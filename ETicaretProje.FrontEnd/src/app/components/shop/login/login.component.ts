import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { AuthService } from '../../../services/auth.service';
import { CustomerService } from '../../../services/customer.service';
import { Customer } from '../../../models/Classes/Customer';
import { UserLoginDto } from '../../../models/Dtos/UserLoginDto';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private authService: AuthService,
    private alertifyMessageService: AlertifyMessageService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }
  loginSubmit():void {
    const formData: UserLoginDto = this.loginForm.value;
    console.log(formData);
    this.customerService.Login(formData).subscribe(
      (response)=>{
        if(response.success == true){
          this.router.navigate(['/shop/products']); // Yönlendirilecek sayfanın yolunu belirtin
          this.alertifyMessageService.alertSuccess(response.message);
          console.log(response);
          var customer: Customer;
          customer = response.resultObject;
          this.authService.loginCustomer(customer);
        }
      },
      (error) => {
        // İstek hata ile sonuçlandığında burası çalışır
        this.alertifyMessageService.alertError(error.error.message);
      }
    )
  }
}
