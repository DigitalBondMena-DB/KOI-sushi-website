import {
  ChangeDetectionStrategy,
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  input,
} from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { LanguageService } from '../../../../core/services/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { HeroSlide } from '../../interfaces/home-api-response.interface';
import { MediaUrlDirective } from '../../../../shared/directives/media-url.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html-pipe';

@Component({
  selector: 'app-hero-section',
  imports: [TranslatePipe, RouterLink, MediaUrlDirective,SafeHtmlPipe],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HeroSection {
  private readonly langService = inject(LanguageService);
  currentLang = computed(() => this.langService.currentLang());

  slides = input<HeroSlide[]>([]);
}
