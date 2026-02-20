import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true, // تأكد أنها standalone
  imports: [CommonModule, RouterModule, TranslateModule], // استخدم TranslateModule أفضل من الـ Pipe لوحده
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isScrolled = false;
  isMenuOpen = false;

  constructor(public translate: TranslateService) {
    // التأكد من ضبط اللغة عند التشغيل
    this.translate.addLangs(['en', 'ar']);
    this.translate.setDefaultLang('ar');

    // لو مفيش لغة حالية (أول مرة)، نستخدم العربي
    if (!this.translate.currentLang) {
      this.translate.use('ar');
    }
  }

  switchLanguage(lang: string) {
    this.translate.use(lang);
    if (typeof document !== 'undefined') {
      const direction = lang === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.dir = direction;
      document.documentElement.lang = lang;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    // نمنع السكرول عند فتح القائمة في الموبايل
    if (typeof document !== 'undefined') {
      document.body.style.overflow = this.isMenuOpen ? 'hidden' : 'auto';
    }
  }

  closeMenu() {
    this.isMenuOpen = false;
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'auto';
    }
  }
}
