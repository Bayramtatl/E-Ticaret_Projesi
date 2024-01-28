import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Admin } from '../../../models/Classes/Admin';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AdminService } from '../../../services/admin.service';
import { response } from 'express';
import { AlertifyMessageService } from '../../../services/alertify-message.service';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css',
  providers: [AuthService, AdminService, AlertifyMessageService],
})
export class InfoComponent implements OnInit {
  admin: any = {};
  constructor(
    private alertifyMessageService: AlertifyMessageService,
    private authService: AuthService,
    private adminService: AdminService,
  ) {

  }
  ngOnInit(): void {
    console.log(this.authService.getAdmin());
    this.admin = this.authService.getAdmin();
  }

  updateAdmin(): void {
      this.adminService.UpdateAdmin(this.admin).subscribe((response) => {
        if (response.success == true) {
          this.alertifyMessageService.alertSuccess(response.message);
          console.log(response);
        }
      });
    }
  
}
