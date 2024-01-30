import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../../../services/customer.service';
import { AlertifyMessageService } from '../../../services/alertify-message.service';

@Component({
  selector: 'app-userinfo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css'],
  providers: [CustomerService]
})
export class UserinfoComponent implements OnInit {
  customer: any;
  adress: any;
  userForm: FormGroup;

  constructor(
    private authService: AuthService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private alertifyMessageService: AlertifyMessageService
  ) {
    this.userForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      county: ['', Validators.required],
      city: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.customer = this.authService.getCustomer();
    this.getAdress();
  }

  getAdress() {
    this.customerService.getAdressByCustomerId(this.customer.id).subscribe(
      (response) => {
        if (response.success == true) {
          console.log(response);
          this.adress = response.resultObject;
          this.updateFormWithAddress();
        }
      });
  }

  updateFormWithAddress() {
    // Adres bilgilerini formda göster
    this.userForm.patchValue({
      county: this.adress.county,
      city: this.adress.city,
      description: this.adress.description
    });
  }

  onSubmit() {
    // Form submit edildiğinde burası çalışacak
    if (this.userForm.valid) {
      // Formun geçerli olup olmadığını kontrol et
      // Customer nesnesine formdaki bilgileri aktar
      this.customer.name = this.userForm.value.name;
      this.customer.surname = this.userForm.value.surname;
      this.customer.email = this.userForm.value.email;
      this.customer.password = this.userForm.value.password;
      this.customer.phoneNumber = this.userForm.value.phoneNumber;
      this.customerService.Update(this.customer).subscribe(
        (response)=>{
          this.authService.loginCustomer(this.customer);
          this.alertifyMessageService.alertSuccess(response.message);
        },
        (error) => {
          // İstek hata ile sonuçlandığında burası çalışır
          this.alertifyMessageService.alertError(error.error.message);
        }
      )
      this.customerService.UpdateAdress(this.adress).subscribe(
        (response)=>{
          console.log(this.adress);
        },
        (error) => {
          // İstek hata ile sonuçlandığında burası çalışır
        }
      )
      // Diğer bilgileri de Customer nesnesine aktarabilirsiniz.

      // Şimdi customer nesnesi güncellendi, bu bilgileri kullanarak başka işlemler yapabilirsiniz.

      console.log('Customer bilgileri güncellendi:', this.customer);
    }
  }
}
