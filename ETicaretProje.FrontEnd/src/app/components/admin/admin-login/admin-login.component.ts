import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AdminFooterComponent } from '../admin-footer/admin-footer.component';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,AdminFooterComponent, ReactiveFormsModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
  AdminLoginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  AdminLoginSubmit(){
    console.warn(this.AdminLoginForm.value);
  }
}
