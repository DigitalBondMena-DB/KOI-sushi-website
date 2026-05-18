import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { MainHeader } from '../../../../shared/components/main-header/main-header';

@Component({
  selector: 'app-gallery-section',
  imports: [CarouselModule, MainHeader],
  templateUrl: './gallery-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GallerySection {
  readonly langService = inject(LanguageService);

  galleryOptions = computed<OwlOptions>(() => ({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    rtl: this.langService.isRtl(),
    nav: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: { items: 2 },
      768: { items: 4 },
      1200: { items: 5 },
    },
  }));

  galleryImages = [
    'https://images.unsplash.com/photo-1582450871972-ab5ca641643d?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1617196034183-421b4917c92d?q=80&w=1000&auto=format&fit=crop',
  ];
}
