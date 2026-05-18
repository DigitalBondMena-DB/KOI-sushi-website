import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-footer',
  imports: [RouterLink],
  templateUrl: './footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly langService = inject(LanguageService);
  readonly socialMediaLinks = [
    { name: 'facebook', url: '#', icon: 'assets/icons/facebook.svg' },
    { name: 'instagram', url: '#', icon: 'assets/icons/facebook.svg' },
    { name: 'tiktok', url: '#', icon: 'assets/icons/facebook.svg' },
  ];
  currentLang = computed(() => this.langService.currentLang());
  quickLinks = computed(() => {
    const lang = this.currentLang();
    return [
      { label: 'Home', path: `/${lang}` },
      { label: 'About Us', path: `/${lang}/about` },
      { label: 'Our Menu', path: `/${lang}/menu` },
      { label: 'Branches', path: `/${lang}/branches` },
    ];
  });
  supportLinks = computed(() => {
    const lang = this.currentLang();
    return [
      { label: 'Contact Us', path: `/${lang}/contact` },
      { label: 'Privacy Policy', path: `/${lang}/privacy` },
      { label: 'Terms of Service', path: `/${lang}/terms` },
    ];
  });
}
