import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable()
export class AdminLoginService {
  apiUrl = 'https://localhost:44324/api/Admin/Login';
  constructor(private httpClient: HttpClient) { }
  AdminLoginSubmit(AdminLoginForm: FormGroup): void {
    // Kullanıcı giriş bilgilerini içeren JSON payload'ını oluşturun
    const payload = {
      username: AdminLoginForm.value.username,
      password: AdminLoginForm.value.password
    };
  
    // HTTP POST isteği gönderin
    this.httpClient.post(this.apiUrl, payload)
      .subscribe(
        (response) => {
          console.log('API Yanıtı:', response);
          // Başarılı yanıtı burada işleyin
        },
        (error) => {
          console.error('API Hatası:', error);
          // Hata yanıtını burada işleyin
        }
      );
  }
}
