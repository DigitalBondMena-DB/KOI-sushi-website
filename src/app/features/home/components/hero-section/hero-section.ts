import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe, RouterLink, NgOptimizedImage],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSection {
  private readonly langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

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
