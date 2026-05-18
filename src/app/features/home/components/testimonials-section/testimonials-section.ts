import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LanguageService } from '../../../../core/services/language.service';
import { MainHeader } from '../../../../shared/components/main-header/main-header';

@Component({
  selector: 'app-testimonials-section',
  imports: [CarouselModule, MainHeader],
  templateUrl: './testimonials-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSection {
  private readonly langService = inject(LanguageService);

  readonly options = computed<OwlOptions>(() => ({
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl: this.langService.isRtl(),
    dots: true,
    navSpeed: 700,
    margin: 20,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
    },
  }));
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
  reviewOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    rtl: true,
    dots: true,
    navSpeed: 700,
    margin: 20,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
    },
  };
}
