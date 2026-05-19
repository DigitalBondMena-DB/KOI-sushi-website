import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
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

  galleryImages = [
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
    'assets/images/about/image.webp',
  ];
}
