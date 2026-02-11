import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  categories = [
    {
      id: 1,
      ar: 'الباستا',
      it: 'La Pasta',
      img: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=500',
    },
    {
      id: 2,
      ar: 'الأطباق الرئيسية',
      it: 'Piatti Principali',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=500',
    },
    {
      id: 3,
      ar: 'مطبخ الشيف',
      it: "Chef's Signature",
      img: 'https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=500',
    },
    {
      id: 4,
      ar: 'الحلويات',
      it: 'Dolci',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=500',
    },
  ];
}
