import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';
import { NAV_LINKS } from '../../constants/nav-links.constant';
import { NavLinks } from '../../models/nav-links';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  readonly langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());
  isMenuOpen = signal(false);
  toggleMobileMenu(): void {
    this.isMenuOpen.update((value) => !value);
  }
  closeMobileMenu(): void {
    this.isMenuOpen.set(false);
  }
  readonly navItems: NavLinks[] = NAV_LINKS;
}
