import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe, RouterLink, LucideAngularModule, NgOptimizedImage],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSection {
  readonly langService = inject(LanguageService);
  readonly arrowIcon = ArrowRight;

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      import('swiper/element/bundle').then(({ register }) => {
        register();
      });
    }
  }

  slides = [
    {
      id: 1,
      image: '/assets/images/hero/image.webp',
      subtitle: 'HERO.CHOOSE_PATH',
      title: 'Experience Japanese Excellence',
      description: 'Discover a world of fresh flavors and artisan sushi crafted with passion.',
      link: '/menu',
    },
    {
      id: 2,
      image: '/assets/images/about/image.webp',
      subtitle: 'HERO.SLOGAN',
      title: 'Freshly Prepared Every Day',
      description: 'From our kitchen to your table, we guarantee the highest quality ingredients.',
      link: '/menu',
    },
  ];
}
