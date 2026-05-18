import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroSection } from './components/hero-section/hero-section';
import { OurStorySection } from '../../shared/components/our-story-section/our-story-section';
import { BestSellersSection } from './components/best-sellers-section/best-sellers-section';
import { TestimonialsSection } from './components/testimonials-section/testimonials-section';
import { GallerySection } from './components/gallery-section/gallery-section';

@Component({
  selector: 'app-home',
  imports: [HeroSection, OurStorySection, BestSellersSection, TestimonialsSection, GallerySection],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
