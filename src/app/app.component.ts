import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ContactComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'OA Landing Page';
}
