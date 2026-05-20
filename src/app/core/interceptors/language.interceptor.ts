import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LanguageService } from '../services/language.service';

export const languageInterceptor: HttpInterceptorFn = (req, next) => {
  const languageService = inject(LanguageService);
  const currentLang = languageService.currentLang();

  const authReq = req.clone({
    headers: req.headers.set('Accept-Language', currentLang),
  });

  return next(authReq);
};
