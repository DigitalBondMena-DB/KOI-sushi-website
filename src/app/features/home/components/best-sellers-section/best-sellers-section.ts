import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MainHeader } from '../../../../shared/components/main-header/main-header';
import { TranslatePipe } from '@ngx-translate/core';
import { BestSeller } from '../../interfaces/home-api-response.interface';
import { BestSellersSlider } from './components/best-sellers-slider/best-sellers-slider';

@Component({
  selector: 'app-best-sellers-section',
  templateUrl: './best-sellers-section.html',
  imports: [MainHeader, TranslatePipe, BestSellersSlider],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BestSellersSection {
  bestSellers = input<BestSeller[]>([]);
}
