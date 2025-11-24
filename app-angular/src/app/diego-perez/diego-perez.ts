import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-diego-perez',
  standalone: true,
  imports: [RouterLink],     // NECESARIO para usar routerLink
  templateUrl: './diego-perez.html',
  styleUrl: './diego-perez.scss'
})
export class DiegoPerezComponent {}
