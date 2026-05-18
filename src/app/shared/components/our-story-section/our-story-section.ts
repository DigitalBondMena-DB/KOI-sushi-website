import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../../../core/services/language.service';

@Component({
  selector: 'app-our-story-section',
  imports: [RouterLink],
  templateUrl: './our-story-section.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OurStorySection {
  readonly class = input<string>('');
  readonly langService = inject(LanguageService);
}
