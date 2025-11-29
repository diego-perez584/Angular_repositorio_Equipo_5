import { Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'acerca', component: AcercaComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '' } // ruta comodín: redirige al Home
];
