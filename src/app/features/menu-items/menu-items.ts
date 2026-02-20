import { Component, OnInit, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MenuItem, Category, MenuServices } from '../../core/services/menu-services/menu-services';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [RouterLink, TranslatePipe, TranslateModule], // مهم جداً عشان زرار "العودة" يشتغل
  templateUrl: './menu-items.html',
  styleUrl: './menu-items.css',
})
export class MenuItems implements OnInit, AfterViewInit {
  currentItems: MenuItem[] = [];
  currentCategory: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuServices,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translate: TranslateService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const categoryId = params.get('id');
      if (categoryId) {
        this.currentItems = this.menuService.getItemsByCategory(categoryId);
        this.currentCategory = this.menuService.getCategoryDetails(categoryId);
      }
    });
  }

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
        {
          threshold: 0.1, // يبدأ لما 10% من العنصر يظهر
          rootMargin: '0px 0px -50px 0px',
        },
      );

      // نراقب الهيدر وكل كارت طبق
      const reveals = this.el.nativeElement.querySelectorAll('.reveal, .item-card');
      reveals.forEach((el: HTMLElement) => observer.observe(el));
    }
  }
}
