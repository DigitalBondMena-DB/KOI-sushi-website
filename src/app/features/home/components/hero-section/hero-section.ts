import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { LanguageService } from '../../../../core/services/language.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { ArrowRight, LucideAngularModule } from 'lucide-angular';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe, RouterLink, LucideAngularModule, CarouselModule, NgOptimizedImage],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {
  readonly langService = inject(LanguageService);
  readonly arrowIcon = ArrowRight;

  customOptions = computed<OwlOptions>(() => ({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    rtl: this.langService.currentLang() === 'ar',
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplayTimeout: 5000,
    nav: false,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
    },
    animateOut: 'fadeOut',
  }));
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
