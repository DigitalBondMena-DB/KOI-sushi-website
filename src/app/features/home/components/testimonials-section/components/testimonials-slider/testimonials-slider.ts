import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { SafeHtmlPipe } from '../../../../../../shared/pipes/safe-html-pipe';

@Component({
  selector: 'app-testimonials-slider',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [SafeHtmlPipe],
  templateUrl: './testimonials-slider.html',
  styles: `
    :host  ::ng-deep {
--swiper-pagination-bullet-horizontal-gap:10px;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsSlider {
  sliderData = input.required<any>();
}
