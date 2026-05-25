import { Component, inject, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MainHeader } from '../../shared/components/main-header/main-header';
import { MenuService } from './services/menu.service';
import { environment } from '../../../environments/environment';
import { SeoService } from '../../core/services/seo.service';
import { LoadingScreen } from "../../shared/components/loading-screen/loading-screen";

@Component({
  selector: 'app-menu',
  imports: [CommonModule, TranslateModule, MainHeader, LoadingScreen],
  templateUrl: './menu.html',
})
export class MenuComponent {
  readonly sanitizer = inject(DomSanitizer);
  private readonly menuService = inject(MenuService);
  private readonly seoService = inject(SeoService);
  readonly menuData = computed(() => this.menuService.menuDataResource.value());
  readonly isLoading = computed(() => this.menuService.menuDataResource.isLoading());

  readonly menuUrl = computed(() => {
    const url = this.menuData()?.menu?.url;
    if (!url) return '';
    if (url.startsWith('http://') || url.startsWith('https://')) {
      return url;
    }
    const cleanPath = url.startsWith('/') ? url.substring(1) : url;
    return `${environment.mediaUrl}${cleanPath}`;
  });

  constructor() {
    effect(() => {
      const data = this.menuData();
      if (data?.seo) {
        this.seoService.updateSeo(data.seo);
      }
    });
  }

}