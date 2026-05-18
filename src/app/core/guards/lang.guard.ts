import { inject } from '@angular/core';
import { CanActivateFn, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LanguageService } from '../services/language.service';

export const langGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const lang = route.paramMap.get('lang');
  const langService = inject(LanguageService);
  const router = inject(Router);

  if (lang === 'en' || lang === 'ar') {
    if (langService.currentLang() !== lang) {
       langService.setLanguage(lang as 'en' | 'ar');
    }
    return true;
  }
  
  const savedLang = langService.currentLang() || 'en';
  const urlTree = router.parseUrl(state.url);
  urlTree.root.children['primary'].segments[0].path = savedLang;
  return urlTree;
};
