import { Component } from '@angular/core';

@Component({
  selector: 'app-lo-que-me-gusta',
  templateUrl: './lo-que-me-gusta.component.html',
  styleUrls: ['./lo-que-me-gusta.component.scss']
})
export class LoQueMeGustaComponent {
  nombre = 'Mis Gustos son:';
  descripcion = 'Me gusta la programación\nLos carros Deportivos\nMi Hobbie es la Mecanica Automotiz\nMe gustan los Tacos\nMis pasatiempos es descansar';
}
