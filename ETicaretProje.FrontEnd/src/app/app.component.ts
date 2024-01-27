import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlertifyMessageService } from './services/alertify-message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [AlertifyMessageService]
})
export class AppComponent {
  title = 'ETicaretProje.Frontend';
}
