import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

// إضافات الترجمة
import { TranslateModule, TranslateLoader, provideTranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

// الحل الذي تفضله: الدالة لا تحتاج HttpClient كباراميتر هنا
export function HttpLoaderFactory() {
  return new TranslateHttpLoader();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        anchorScrolling: 'enabled',
        scrollPositionRestoration: 'enabled',
      }),
      withViewTransitions(),
    ),
    provideClientHydration(withEventReplay()),
    provideHttpClient(withFetch()),

    // 1. التعديل الأول هنا: استبدال defaultLanguage بـ fallbackLang
    provideTranslateService({
      fallbackLang: 'ar',
    }),

    importProvidersFrom(
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [],
        },
        // 2. التعديل الثاني (للإحتياط): نكررها هنا أيضاً
        fallbackLang: 'ar',
      }),
    ),

    {
      provide: TRANSLATE_HTTP_LOADER_CONFIG,
      useValue: {
        prefix: '/i18n/',
        suffix: '.json',
      },
    },
  ],
};
