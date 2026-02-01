import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  fullMenu = [
    {
      id: 1,
      ar: 'إفطارات كرباتشيو',
      it: 'Colazione',
      img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666',
      isSignature: false,
    },
    {
      id: 2,
      ar: 'شوربات التوقيع',
      it: 'Zuppa Signature',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd',
      isSignature: true,
    },
    {
      id: 3,
      ar: 'المقبلات الباردة',
      it: 'Antipasti Freddi',
      img: 'https://images.unsplash.com/photo-1541529086526-db283c563270',
      isSignature: false,
    },
    {
      id: 4,
      ar: 'المقبلات الساخنة',
      it: 'Antipasti Caldi',
      img: 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e',
      isSignature: false,
    },
    {
      id: 5,
      ar: 'الباستا الإيطالية',
      it: 'La Pasta',
      img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856',
      isSignature: false,
    },
    {
      id: 6,
      ar: 'الأطباق الرئيسية',
      it: 'Piatti Principali',
      img: 'https://images.unsplash.com/photo-1544025162-d76694265947',
      isSignature: false,
    },
    {
      id: 7,
      ar: 'مطبخ الشيف',
      it: 'Chefs Signature',
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
      isSignature: true,
    },
    {
      id: 8,
      ar: 'السمك والبحر',
      it: 'Pesce and More',
      img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2',
      isSignature: false,
    },
    {
      id: 9,
      ar: 'حلويات كرباتشيو',
      it: 'Dolci',
      img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b',
      isSignature: false,
    },
  ];
}
