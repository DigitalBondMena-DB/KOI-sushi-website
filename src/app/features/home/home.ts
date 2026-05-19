import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { OurStorySection } from '../../shared/components/our-story-section/our-story-section';
import { BestSellersSection } from './components/best-sellers-section/best-sellers-section';
import { TestimonialsSection } from './components/testimonials-section/testimonials-section';
import { GallerySection } from './components/gallery-section/gallery-section';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [HeroSection, OurStorySection, BestSellersSection, TestimonialsSection, GallerySection],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      import('swiper/element/bundle').then(({ register }) => {
        register();
      });
    }
  }
}
