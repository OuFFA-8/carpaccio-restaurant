import { AfterViewInit, Component, ElementRef, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Category, MenuServices } from '../../core/services/menu-services/menu-services';
import { RouterLink } from '@angular/router';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink, TranslatePipe, TranslateModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit, AfterViewInit {
  categories: Category[] = [];

  constructor(
    private menuService: MenuServices,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translate: TranslateService,
  ) {}

  ngOnInit() {
    this.categories = this.menuService.getCategories();
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
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px',
        },
      );

      const reveals = this.el.nativeElement.querySelectorAll('.reveal');
      reveals.forEach((el: HTMLElement) => observer.observe(el));
    }
  }
}
