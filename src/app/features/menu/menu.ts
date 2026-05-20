import { Component, signal, inject, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { Title, Meta } from '@angular/platform-browser';
import { MainHeader } from '../../shared/components/main-header/main-header';
import { MenuService } from './services/menu.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-menu',
  imports: [CommonModule, TranslateModule, PdfViewerModule, MainHeader],
  templateUrl: './menu.html',
})
export class MenuComponent {
  private readonly menuService = inject(MenuService);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  readonly menuData = computed(() => this.menuService.menuDataResource.value());
  
  readonly pdfSrc = computed(() => {
    const url = this.menuData()?.menu?.url;
    if (!url) return '';
    const cleanPath = url.startsWith('/') ? url.substring(1) : url;
    return `${environment.mediaUrl}${cleanPath}`;
  });

  zoom = signal(1);

  constructor() {
    effect(() => {
      const data = this.menuData();
      if (data?.seo) {
        if (data.seo.title) {
          this.titleService.setTitle(data.seo.title);
        }
        if (data.seo.description) {
          this.metaService.updateTag({ name: 'description', content: data.seo.description });
        }
      }
    });
  }

  zoomIn() {
    if (this.zoom() < 2) {
      this.zoom.update((prev) => prev + 0.1);
    }
  }

  zoomOut() {
    if (this.zoom() > 0.5) {
      this.zoom.update((prev) => prev - 0.1);
    }
  }
}
