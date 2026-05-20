import { inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { LanguageService } from '../../../core/services/language.service';
import { ApiEndpoints } from '../../../core/enums/api-endpoints.enum';
import { environment } from '../../../../environments/environment';
import { BranchesApiResponse, BranchesData } from '../interfaces/branches-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class BranchesService {
  private readonly languageService = inject(LanguageService);

  readonly branchesDataResource = httpResource<BranchesData>(() => ({
    url: `${environment.apiUrl}${ApiEndpoints.BRANCHES}`,
    headers: {
      'Accept-Language': this.languageService.currentLang(),
    }
  }), {
    parse: (res: unknown) => (res as BranchesApiResponse).data,
  });
}
