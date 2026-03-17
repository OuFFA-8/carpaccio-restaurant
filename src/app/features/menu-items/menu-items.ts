import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ChangeDetectorRef,
} from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { MenuItem, Category, MenuServices } from '../../core/services/menu-services/menu-services';
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu-items',
  standalone: true,
  imports: [RouterLink, TranslatePipe, TranslateModule],
  templateUrl: './menu-items.html',
  styleUrl: './menu-items.css',
})
export class MenuItems implements OnInit, AfterViewInit {
  currentItems: MenuItem[] = [];
  currentCategory: Category | undefined;
  allCategories: Category[] = [];
  private observer: IntersectionObserver | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private menuService: MenuServices,
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translate: TranslateService,
  ) {}

  ngOnInit() {
    this.allCategories = this.menuService.getCategories();

    this.route.paramMap.subscribe((params) => {
      const categoryId = params.get('id');
      if (categoryId) {
        this.currentItems = this.menuService.getItemsByCategory(categoryId);
        this.currentCategory = this.menuService.getCategoryDetails(categoryId);
      }

      window.scrollTo(0, 0);
      this.cdr.detectChanges(); // ← يحل مشكلة الـ active state

      // ← يحل مشكلة الـ reveal بعد تغيير الراوت
      if (isPlatformBrowser(this.platformId)) {
        setTimeout(() => this.setupObserver(), 50);
      }
    });
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupObserver();
    }
  }

  private setupObserver() {
    // نوقف الـ observer القديم
    if (this.observer) {
      this.observer.disconnect();
    }

    // نشيل show من العناصر القديمة عشان الأنيميشن يشتغل تاني
    const allReveal = this.el.nativeElement.querySelectorAll('.reveal, .item-card');
    allReveal.forEach((el: HTMLElement) => el.classList.remove('show'));

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' },
    );

    allReveal.forEach((el: HTMLElement) => this.observer!.observe(el));
  }

  goToCategory(categoryId: string) {
    this.router.navigate(['/menu/category', categoryId]);
  }

  isActive(cat: Category): boolean {
    return cat.id === this.currentCategory?.id;
  }
}
