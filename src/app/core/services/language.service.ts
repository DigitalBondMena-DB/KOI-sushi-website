import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly _currentLang = signal<Language>('en');
  readonly currentLang = this._currentLang.asReadonly();
  readonly isRtl = computed(() => this._currentLang() === 'ar');

  constructor() {
    this.initLanguage();
  }

  private initLanguage() {
    this.translate.setDefaultLang('en');
    
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('lang') as Language;
      const lang = savedLang || 'en';
      this.setLanguage(lang);
    } else {
      this.setLanguage('en');
    }
  }

  setLanguage(lang: Language) {
    this._currentLang.set(lang);
    this.translate.use(lang);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('lang', lang);
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    }
  }

  private readonly router = inject(Router);

  toggleLanguage() {
    const newLang = this._currentLang() === 'en' ? 'ar' : 'en';
    this.setLanguage(newLang);
    
    const currentUrl = this.router.url;
    let newUrl = currentUrl;
    if (currentUrl.startsWith('/en')) {
      newUrl = currentUrl.replace('/en', '/ar');
    } else if (currentUrl.startsWith('/ar')) {
      newUrl = currentUrl.replace('/ar', '/en');
    } else {
      newUrl = `/${newLang}${currentUrl}`;
    }
    this.router.navigateByUrl(newUrl);
  }
}
