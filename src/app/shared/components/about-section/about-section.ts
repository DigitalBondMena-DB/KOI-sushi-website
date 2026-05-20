import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AboutHome } from '../../../features/home/interfaces/home-api-response.interface';
import { MediaUrlDirective } from '../../directives/media-url.directive';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';

@Component({
  selector: 'app-about-section',
  imports: [MediaUrlDirective, TranslatePipe, SafeHtmlPipe],
  templateUrl: './about-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSection {
  about = input<AboutHome>();
}
