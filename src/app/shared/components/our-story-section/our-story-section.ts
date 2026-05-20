import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';
import { StoryData } from '../../../features/about/interfaces/about-api-response.interface';
import { MediaUrlDirective } from '../../directives/media-url.directive';
import { TranslatePipe } from '@ngx-translate/core';
import { SafeHtmlPipe } from '../../pipes/safe-html-pipe';

@Component({
  selector: 'app-our-story-section',
  imports: [RouterLink, MediaUrlDirective, TranslatePipe, SafeHtmlPipe],
  templateUrl: './our-story-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurStorySection {
  readonly class = input<string>('');
  readonly story = input<StoryData>();
  readonly langService = inject(LanguageService);
}
