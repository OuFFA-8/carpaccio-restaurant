import { AfterViewInit, Component, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common'; // مهم جداً للـ SSR
import { Category, MenuServices } from '../../core/services/menu-services/menu-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true, // تأكد إنها موجودة لو بتستخدم Standalone
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit, AfterViewInit {
  categories: Category[] = [];

  constructor(
    private menuService: MenuServices,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object, // حقن معرف المنصة
  ) {}

  ngOnInit() {
    this.categories = this.menuService.getCategories();
  }

  ngAfterViewInit() {
    // التحقق هل الكود يعمل في المتصفح أم على السيرفر
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              // اختياري: لو عايز الأنميشن يحصل مرة واحدة بس وميتكررش كل شوية
              // observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px', // هيبدأ الأنميشن قبل ما العنصر يوصل تماماً
        },
      );

      const reveals = this.el.nativeElement.querySelectorAll('.reveal');
      reveals.forEach((el: HTMLElement) => observer.observe(el));
    }
  }
}
