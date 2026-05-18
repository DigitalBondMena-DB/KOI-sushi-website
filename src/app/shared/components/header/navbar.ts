import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, Menu, X, Globe } from 'lucide-angular';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, LucideAngularModule],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());
  isMenuOpen = signal(false);
  readonly icons = {
    globe: Globe,
    menu: Menu,
    x: X,
  };
  toggleMobileMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }
  closeMobileMenu(): void {
    this.isMenuOpen.set(false);
  }
  navItems = computed(() => {
    const lang = this.currentLang();
    return [
      { label: 'NAV.HOME', path: `/${lang}` },
      { label: 'NAV.ABOUT', path: `/${lang}/about` },
      { label: 'NAV.MENU', path: `/${lang}/menu` },
      { label: 'NAV.BRANCHES', path: `/${lang}/branches` },
    ];
  });
}
