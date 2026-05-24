import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ContactStateService } from '../../features/contact/contact-state.service';
import { LanguageService } from '../services/language.service';

export const contactDoneGuard: CanActivateFn = (route, state) => {
  const contactStateService = inject(ContactStateService);
  const router = inject(Router);
  const langService = inject(LanguageService);

  if (contactStateService.getSubmitted()) {
    return true;
  }

  // Redirect to contact if accessed directly
  const lang = langService.currentLang() || 'en';
  return router.createUrlTree([`/${lang}/contact`]);
};
