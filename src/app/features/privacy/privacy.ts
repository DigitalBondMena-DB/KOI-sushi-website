import { Component, computed, effect, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { PrivacyService } from './services/privacy.service';
import { SafeHtmlPipe } from '../../shared/pipes/safe-html-pipe';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, TranslateModule, SafeHtmlPipe],
  template: `
    <div class="pt-24 pb-24 bg-light min-h-screen">
      <div class="container mx-auto px-4 max-w-4xl">
        @if (privacyData(); as data) {
          <div class="bg-white rounded-[2.5rem] p-10 md:p-16 shadow-2xl shadow-dark/5 border border-dark/5">
            <h1 class="text-4xl font-bold text-dark mb-8 uppercase tracking-tight">{{ data.privacy.title }}</h1>
            
            <div class="prose prose-lg prose-primary max-w-none space-y-8 text-dark/70" [innerHTML]="data.privacy.text | safeHtml">
            </div>

            <div class="mt-12 pt-8 border-t border-dark/5 text-sm text-dark/40">
              Last updated: May 14, 2026
            </div>
          </div>
        } @else {
          <div class="flex justify-center items-center h-64">
            <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    :host ::ng-deep .prose h2 { margin-top: 2rem; color: #010101; font-weight: bold; font-size: 1.5rem; margin-bottom: 1rem; }
    :host ::ng-deep .prose p { margin-bottom: 1rem; line-height: 1.8; }
    :host ::ng-deep .prose ul { list-style-type: disc; padding-left: 1.5rem; margin-bottom: 1rem; }
    :host ::ng-deep .prose li { margin-bottom: 0.5rem; }
  `]
})
export class PrivacyComponent {
  private readonly privacyService = inject(PrivacyService);
  private readonly seoService = inject(SeoService);

  readonly privacyData = computed(() => {
    return this.privacyService.privacyDataResource.value()
  });

  constructor() {
    effect(() => {
      const data = this.privacyData();
      if (data?.seo) {
        this.seoService.updateSeo(data.seo);
      }
    });
  }
}
