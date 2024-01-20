import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/shop/shared/header/header.component';
import { FooterComponent } from './components/shop/shared/footer/footer.component';
import { MainComponent } from './components/shop/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ETicaretProje.Frontend';
}
