import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { AboutSection } from '../../shared/components/about-section/about-section';
import { OurStorySection } from '../../shared/components/our-story-section/our-story-section';

@Component({
  selector: 'app-about',
  imports: [CommonModule, TranslateModule, AboutSection, OurStorySection],
  templateUrl: './about.html',
})
export class AboutComponent {}
