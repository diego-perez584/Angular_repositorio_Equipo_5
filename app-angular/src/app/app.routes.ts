import { Routes } from '@angular/router';
import { DiegoPerezComponent } from './diego-perez/diego-perez';
import {AleComponent } from './ale/ale';
import {Manuel} from './manuel/manuel'
import { HomeComponent } from './home/home';
import { SamanthaObregonComponent } from './samantha-obregon/samantha-obregon.component';
import { BraianComponente } from './braian/braian';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diego', component: DiegoPerezComponent },
  { path: 'alejandro', component: AleComponent },
  { path: 'manuel', component: Manuel },
  { path: 'samantha', component: SamanthaObregonComponent},
  { path: 'braian', component: BraianComponente}
];
