import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ImagenComponent } from './imagen/imagen.component';
import { LoQueMeGustaComponent } from './lo-que-me-gusta/lo-que-me-gusta.component';
import { QuienSoyComponent } from './quien-soy/quien-soy.component';

@Component({
  selector: 'app-braian',
  standalone: true,
  imports: [ 
      HeaderComponent,
      ImagenComponent,
      LoQueMeGustaComponent,
      QuienSoyComponent
    ],
  templateUrl: './braian.html',
  styleUrl: './braian.scss'
})
export class BraianComponente {

}
