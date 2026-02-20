import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact implements AfterViewInit {
  isSent = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {}

  sendMessage() {
    this.isSent = true;
    // تأثير اهتزاز خفيف للنجاح أو مسح الحقول يمكن إضافته هنا
    setTimeout(() => (this.isSent = false), 5000);
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
        { threshold: 0.1 },
      );

      const reveals = this.el.nativeElement.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right',
      );
      reveals.forEach((el: HTMLElement) => observer.observe(el));
    }
  }
}
