import { Component, OnInit } from '@angular/core';
import { Category, MenuServices } from '../../core/services/menu-services/menu-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu implements OnInit {
  categories: Category[] = []; // لاحظ الاسم اتغير لـ categories

  constructor(private menuService: MenuServices) {}

  ngOnInit() {
    this.categories = this.menuService.getCategories();
  }
}
