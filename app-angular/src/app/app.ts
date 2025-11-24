import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ImagenComponent } from './imagen/imagen.component';
import { LoQueMeGustaComponent } from './lo-que-me-gusta/lo-que-me-gusta.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    ImagenComponent,
    LoQueMeGustaComponent,
    QuienSoyComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class AppComponent {}

