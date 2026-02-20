import { Component, signal, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { Header } from './shared/components/header/header';
import { Footer } from './shared/components/footer/footer';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  isScrolled = false;

  constructor(
    private translate: TranslateService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    // إعداد اللغة الافتراضية
    this.translate.setDefaultLang('ar');
    this.useLanguage('ar');
  }

  // فنكشن تبديل اللغة وتغيير اتجاه الصفحة (RTL/LTR)
  useLanguage(lang: string) {
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      const direction = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
      document.documentElement.lang = lang;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.isScrolled = window.scrollY > 50;
    }
  }
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
}
