import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MainHeader } from '../../../../shared/components/main-header/main-header';
import { TranslatePipe } from '@ngx-translate/core';
import { BestSeller } from '../../interfaces/home-api-response.interface';
import { MediaUrlDirective } from '../../../../shared/directives/media-url.directive';
import { SafeHtmlPipe } from '../../../../shared/pipes/safe-html-pipe';

@Component({
  selector: 'app-best-sellers-section',
  templateUrl: './best-sellers-section.html',
  imports: [MainHeader, TranslatePipe, MediaUrlDirective,SafeHtmlPipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellersSection {
  bestSellers = input<BestSeller[]>([]);
}
