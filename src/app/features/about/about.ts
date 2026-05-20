import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AboutSection } from '../../shared/components/about-section/about-section';
import { OurStorySection } from '../../shared/components/our-story-section/our-story-section';
import { AboutService } from './services/about.service';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule, AboutSection, OurStorySection],
  templateUrl: './about.html',
})
export class AboutComponent {
  private readonly aboutService = inject(AboutService);
  private readonly titleService = inject(Title);
  private readonly metaService = inject(Meta);

  readonly aboutData = computed(() => this.aboutService.aboutDataResource.value());

  constructor() {
    effect(() => {
      const data = this.aboutData();
      if (data?.seo) {
        if (data.seo.title) {
          this.titleService.setTitle(data.seo.title);
        }
        if (data.seo.description) {
          this.metaService.updateTag({ name: 'description', content: data.seo.description });
        }
      }
    });
  }
}
