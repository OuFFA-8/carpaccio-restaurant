import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, Category, MenuServices } from '../../core/services/menu-services/menu-services';

@Component({
  selector: 'app-menu-items',
  imports: [],
  templateUrl: './menu-items.html',
  styleUrl: './menu-items.css',
})
export class MenuItems implements OnInit {
  currentItems: MenuItem[] = [];
  currentCategory: Category | undefined;

  constructor(
    private route: ActivatedRoute,
    private menuService: MenuServices,
  ) {}

  ngOnInit() {
    // بناخد الـ id من الرابط (URL)
    this.route.paramMap.subscribe((params) => {
      const categoryId = params.get('id');
      if (categoryId) {
        // بنجيب الأطباق الخاصة بالقسم ده بس
        this.currentItems = this.menuService.getItemsByCategory(categoryId);
        // بنجيب تفاصيل القسم (الاسم والصورة)
        this.currentCategory = this.menuService.getCategoryDetails(categoryId);
      }
    });
  }
}
