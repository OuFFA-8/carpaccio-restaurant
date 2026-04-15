import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, TranslatePipe, TranslateModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
  categories = [
    {
      id: 1,
      ar: 'المطبخ الإيطالي',
      category: 'category',
      categoryId: 'italian',
      it: 'Cucina Italiana',
      img: '/images/رافيولي.jpeg',
    },
    {
      id: 2,
      category: 'category',
      categoryId: 'main',
      ar: 'الأطباق الرئيسية',
      it: 'Piatti Principali',
      img: '/images/مشكل مشاوي مقدسي.jpeg',
    },
    {
      id: 3,
      ar: 'مطبخ الشيف',

      category: 'category',
      categoryId: 'chef',
      it: "Chef's Signature",
      img: '/images/فولوستير كرباتشو.jpeg',
    },
    {
      id: 4,
      ar: 'الحلويات',
      category: 'category',
      categoryId: 'desserts',
      it: 'Dolci',
      img: '/images/باي الليمون الفرنسي.jpeg',
    },
  ];

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translate: TranslateService,
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            }
          });
        },
        { threshold: 0.1 },
      );

      const elements = this.el.nativeElement.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right',
      );
      elements.forEach((el: HTMLElement) => observer.observe(el));
    }
  }
}
