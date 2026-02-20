import { Component, AfterViewInit, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common'; // CommonModule عشان @if
import { TranslateModule, TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About implements AfterViewInit {
  showSecretOffer = false;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
    public translate: TranslateService,
  ) {}

  toggleOffer() {
    this.showSecretOffer = !this.showSecretOffer;
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
              // اختياري: نوقف المراقبة بعد الظهور لتقليل الحمل
              // observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15, // يبدأ لما 15% من السكشن يظهر
          rootMargin: '0px 0px -50px 0px',
        },
      );

      // نراقب العناصر اللي واخدة كلاسات الأنيميشن
      const reveals = this.el.nativeElement.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right',
      );
      reveals.forEach((el: HTMLElement) => observer.observe(el));
    }
  }
}
