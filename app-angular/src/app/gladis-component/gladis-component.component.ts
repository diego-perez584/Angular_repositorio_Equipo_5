import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gladis-component',
  imports: [RouterLink],
  templateUrl: './gladis-component.component.html',
  styleUrls: ['./gladis-component.component.scss']
})
export class GladisComponentComponent {
  @Input() nombre: string = 'Gladis Pérez';
  @Input() carrera: string = 'Infraestructura en redes digitales';
  @Input() gusto: string = 'GLoss y dormir ';
}
