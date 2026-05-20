import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { MainHeader } from '../../../../shared/components/main-header/main-header';
import { TranslatePipe } from '@ngx-translate/core';
import { GallerySlider } from './components/gallery-slider/gallery-slider';
import { GalleryImage } from '../../interfaces/home-api-response.interface';

@Component({
  selector: 'app-gallery-section',
  imports: [MainHeader, TranslatePipe, GallerySlider],
  templateUrl: './gallery-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GallerySection {
  galleryImages = input<GalleryImage[]>([]);
}
