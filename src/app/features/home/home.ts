import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home implements AfterViewInit {
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

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
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
