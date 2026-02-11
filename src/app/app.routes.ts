import { Routes } from '@angular/router';
import { About } from './features/about/about';
import { Contact } from './features/contact/contact';
import { Home } from './features/home/home';
import { Menu } from './features/menu/menu';
import { MenuDetails } from './features/menu-details/menu-details';
import { MenuItems } from './features/menu-items/menu-items';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home, title: 'Carpaccio | Home' },
  { path: 'about', component: About, title: 'About Carpaccio' },
  { path: 'menu', component: Menu, title: 'Carpaccio Menu' },
  { path: 'menu/category/:id', component: MenuItems },
  { path: 'menu/:id', component: MenuDetails, title: 'Carpaccio | Details' },
  { path: 'contact', component: Contact, title: 'Contact Us' },
  { path: '**', redirectTo: 'home' },
];
