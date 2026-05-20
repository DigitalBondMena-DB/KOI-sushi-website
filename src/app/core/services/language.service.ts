import { Injectable, signal, computed, inject, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

export type Language = 'en' | 'ar';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly translate = inject(TranslateService);
  private readonly document = inject(DOCUMENT);
  private readonly renderer = inject(RendererFactory2).createRenderer(null, null);
  private readonly router = inject(Router);

  private readonly _currentLang = signal<Language>('en');
  readonly currentLang = this._currentLang.asReadonly();
  readonly isRtl = computed(() => this._currentLang() === 'ar');

  constructor() {
    this.translate.setDefaultLang('en');
  }

  setLanguage(lang: Language) {
    this._currentLang.set(lang);
    this.translate.use(lang);

    const htmlTag = this.document.documentElement;
    this.renderer.setAttribute(htmlTag, 'lang', lang);
    this.renderer.setAttribute(htmlTag, 'dir', lang === 'ar' ? 'rtl' : 'ltr');
  }

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
    window.location.href = newUrl;
  }
}
