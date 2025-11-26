import { Routes } from '@angular/router';
import { DiegoPerezComponent } from './diego-perez/diego-perez';
import { HomeComponent } from './home/home';
import { SamanthaObregonComponent } from './samantha-obregon/samantha-obregon.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diego', component: DiegoPerezComponent },
  { path: 'samantha', component: SamanthaObregonComponent }
];
