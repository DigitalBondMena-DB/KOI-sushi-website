import { Component, inject, computed, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MainHeader } from '../../shared/components/main-header/main-header';
import { BranchesService } from './services/branches.service';
import { SeoService } from '../../core/services/seo.service';
import { LoadingScreen } from "../../shared/components/loading-screen/loading-screen";

@Component({
  selector: 'app-branches',
  imports: [CommonModule, TranslateModule, MainHeader, LoadingScreen],
  templateUrl: './branches.html',
})
export class BranchesComponent {
  readonly sanitizer = inject(DomSanitizer);
  private readonly branchesService = inject(BranchesService);
  private readonly seoService = inject(SeoService);

  readonly branchesData = computed(() => this.branchesService.branchesDataResource.value());
  readonly isLoading = computed(() => this.branchesService.branchesDataResource.isLoading());
  readonly branches = computed(() => this.branchesData()?.branches || []);

  constructor() {
    effect(() => {
      const data = this.branchesData();
      if (data?.seo) {
        this.seoService.updateSeo(data.seo);
      }
    });
  }

}
