import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { Home } from './features/home/home';
import { Menu } from './features/menu/menu';

export const routes: Routes = [
  { path: '', component: Home, title: 'Carpaccio | Home' },
  { path: 'about', component: About, title: 'About Carpaccio' },
  { path: 'menu', component: Menu, title: 'Carpaccio Menu' },
  { path: 'contact', component: Contact, title: 'Contact Us' },
  { path: '**', redirectTo: '' },
];
