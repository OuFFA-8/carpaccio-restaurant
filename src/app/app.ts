import { Component, signal, HostListener } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('carpaccio');
  isScrolled = false;

  // قائمة الأصناف اللي بعتها يا زميلي
  menuCategories = [
    {
      ar: 'إفطارات كرباتشيو الفاخرة',
      it: 'Colazione',
      img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?q=80&w=500',
    },
    {
      ar: 'شوربات كرباتشيو',
      it: 'Zuppa Signature',
      img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=500',
    },
    {
      ar: 'المقبلات الباردة',
      it: 'Antipasti Freddi',
      img: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=500',
    },
    {
      ar: 'المقبلات الساخنة',
      it: 'Antipasti Caldi',
      img: 'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=500',
    },
    {
      ar: 'الباستا الإيطالية',
      it: 'La Pasta',
      img: 'https://images.unsplash.com/photo-1473093226795-af9932fe5856?q=80&w=500',
    },
    {
      ar: 'مطبخ الشيف',
      it: "Chef's Signature",
      img: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=500',
    },
  ];

  // فنكشن عشان نغير شكل النافبار لما ننزل بالماوس
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
