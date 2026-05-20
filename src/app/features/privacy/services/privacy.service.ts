import { inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { LanguageService } from '../../../core/services/language.service';
import { ApiEndpoints } from '../../../core/enums/api-endpoints.enum';
import { environment } from '../../../../environments/environment';
import { PrivacyApiResponse, PrivacyPageData } from '../interfaces/privacy-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class PrivacyService {
  private readonly languageService = inject(LanguageService);

  readonly privacyDataResource = httpResource<PrivacyPageData>(() => ({
    url: `${environment.apiUrl}${ApiEndpoints.PRIVACY}`,
    headers: {
      'Accept-Language': this.languageService.currentLang(),
    }
  }), {
    parse: (res: unknown) => (res as PrivacyApiResponse).data,
  });
}
