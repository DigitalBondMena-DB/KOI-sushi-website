import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { MainHeader } from '../../../../shared/components/main-header/main-header';
import { TranslateModule } from '@ngx-translate/core';
import { TestimonialsSlider } from "./components/testimonials-slider/testimonials-slider";
import { Testimonial } from '../../interfaces/home-api-response.interface';

@Component({
  selector: 'app-testimonials-section',
  imports: [MainHeader, TranslateModule, TestimonialsSlider],
  templateUrl: './testimonials-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsSection {
  reviews = input<Testimonial[]>([]);
}
