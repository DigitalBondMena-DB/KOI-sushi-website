import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LucideAngularModule, Menu, X, Globe } from 'lucide-angular';
import { LanguageService } from '../../../core/services/language.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule, LucideAngularModule],
  templateUrl: './navbar.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class NavbarComponent {
  readonly langService = inject(LanguageService);
  isMenuOpen = false;

  readonly globeIcon = Globe;
  readonly menuIcon = Menu;
  readonly xIcon = X;

  get navItems() {
    const lang = this.langService.currentLang();
    return [
      { label: 'NAV.HOME', path: `/${lang}` },
      { label: 'NAV.ABOUT', path: `/${lang}/about` },
      { label: 'NAV.MENU', path: `/${lang}/menu` },
      { label: 'NAV.BRANCHES', path: `/${lang}/branches` },
      // { label: 'NAV.CONTACT', path: `/${lang}/contact` }
    ];
  }
}
