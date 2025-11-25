import { Routes } from '@angular/router';
import { DiegoPerezComponent } from './diego-perez/diego-perez';
import {AleComponent } from './ale/ale';
import { HomeComponent } from './home/home';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diego', component: DiegoPerezComponent },
  { path: 'alejandro', component: AleComponent }
];
