import { Component } from '@angular/core';

@Component({
  selector: 'app-diego-perez',         // <- este es el nombre con el que puedes llamarlo en HTML
  templateUrl: './diego-perez.html', // el HTML asociado
  styleUrls: ['./diego-perez.scss']   // los estilos asociados
})
export class DiegoPerezComponent {
  nombre = 'Diego Pérez';
  descripcion = 'Desarrollador Frontend y amante de Angular 🚀';
}
