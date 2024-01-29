import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CustomerService } from '../../../services/customer.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserRegisterDto } from '../../../models/Dtos/UserRegisterDto';
import { Admin } from '../../../models/Classes/Admin';
import { AlertifyMessageService } from '../../../services/alertify-message.service';
import { AuthService } from '../../../services/auth.service';
import { Customer } from '../../../models/Classes/Customer';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
  providers: [CustomerService],
})
export class RegisterComponent {
  registerForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router,
    private authService: AuthService,
    private alertifyMessageService: AlertifyMessageService
  ) {
    this.registerForm = this.fb.group({
      city: ['', Validators.required],
      county: ['', Validators.required],
      description: [''],
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required],
      phonenumber: ['', Validators.required],
      surname: ['', Validators.required] 
    });
  }

  registerSubmit(): void {
    const formData: UserRegisterDto = this.registerForm.value;
    console.log(formData);
    this.customerService.Register(formData).subscribe(
      (response)=>{
        if(response.success == true){
          this.router.navigate(['/shop/products']); // Yönlendirilecek sayfanın yolunu belirtin
          this.alertifyMessageService.alertSuccess(response.message);
          console.log(response)
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
