import { ChangeDetectionStrategy, Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { MediaUrlDirective } from '../../../../../../shared/directives/media-url.directive';
import { SafeHtmlPipe } from '../../../../../../shared/pipes/safe-html-pipe';
import { TranslatePipe } from '@ngx-translate/core';
import { BestSeller } from '../../../../interfaces/home-api-response.interface';

@Component({
  selector: 'app-best-sellers-slider',
  imports: [MediaUrlDirective, SafeHtmlPipe, TranslatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './best-sellers-slider.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellersSlider {
  bestSellers = input.required<BestSeller[]>();
}
