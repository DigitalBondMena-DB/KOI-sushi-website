import { ChangeDetectionStrategy, Component, inject, PLATFORM_ID, computed, effect } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { BestSellersSection } from './components/best-sellers-section/best-sellers-section';
import { TestimonialsSection } from './components/testimonials-section/testimonials-section';
import { GallerySection } from './components/gallery-section/gallery-section';
import { isPlatformBrowser } from '@angular/common';
import { AboutSection } from '../../shared/components/about-section/about-section';
import { HomeService } from './services/home.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  imports: [HeroSection, BestSellersSection, TestimonialsSection, GallerySection, AboutSection],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly homeService = inject(HomeService);
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  // Exposing the home data signal
  readonly homeData = computed(() => this.homeService.homeDataResource.value());
  readonly isLoading = computed(() => this.homeService.homeDataResource.isLoading());
  readonly error = computed(() => this.homeService.homeDataResource.error());

  constructor() {
    const platformId = inject(PLATFORM_ID);
    if (isPlatformBrowser(platformId)) {
      import('swiper/element/bundle').then(({ register }) => {
        register();
      });
    }

    // Effect to update SEO when data changes
    effect(() => {
      const data = this.homeData();
      if (data?.seo) {
        this.title.setTitle(data.seo.title);
        this.meta.updateTag({ name: 'description', content: data.seo.description });
      }
    });
  }
}
