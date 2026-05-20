import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { MediaUrlDirective } from '../../../../../../shared/directives/media-url.directive';
import { GalleryImage } from '../../../../interfaces/home-api-response.interface';

@Component({
  selector: 'app-gallery-slider',
  imports: [MediaUrlDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './gallery-slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GallerySlider {
  Images = input.required<GalleryImage[]>();
}
