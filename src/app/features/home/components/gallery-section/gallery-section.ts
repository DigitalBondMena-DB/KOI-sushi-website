import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../../../core/services/language.service';
import { MainHeader } from '../../../../shared/components/main-header/main-header';

@Component({
  selector: 'app-gallery-section',
  imports: [MainHeader],
  templateUrl: './gallery-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GallerySection {
  readonly langService = inject(LanguageService);

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      import('swiper/element/bundle').then(({ register }) => {
        register();
      });
    }
  }

  galleryImages = [
    'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1000&auto=format&fit=crop',
  ];
}
