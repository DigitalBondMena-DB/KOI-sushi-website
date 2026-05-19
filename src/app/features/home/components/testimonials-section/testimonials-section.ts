import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { LanguageService } from '../../../../core/services/language.service';
import { MainHeader } from '../../../../shared/components/main-header/main-header';

@Component({
  selector: 'app-testimonials-section',
  imports: [MainHeader],
  templateUrl: './testimonials-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsSection {
  readonly langService = inject(LanguageService);

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      import('swiper/element/bundle').then(({ register }) => {
        register();
      });
    }
  }

  reviews = [
    { id: 1, name: 'John Smith', message: 'Best sushi in town! The freshness is unparalleled.' },
    {
      id: 2,
      name: 'Sarah Ahmed',
      message: 'Amazing atmosphere and the Dragon Roll is a must-try!',
    },
    {
      id: 3,
      name: 'Michael Chen',
      message: 'Quick service and very professional staff. Highly recommended.',
    },
  ];
}
