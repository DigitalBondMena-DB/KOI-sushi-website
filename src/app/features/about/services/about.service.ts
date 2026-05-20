import { inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { LanguageService } from '../../../core/services/language.service';
import { ApiEndpoints } from '../../../core/enums/api-endpoints.enum';
import { environment } from '../../../../environments/environment';
import { AboutApiResponse, AboutPageData } from '../interfaces/about-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  private readonly languageService = inject(LanguageService);

  readonly aboutDataResource = httpResource<AboutPageData>(() => ({
    url: `${environment.apiUrl}${ApiEndpoints.ABOUT}`,
    headers: {
      'Accept-Language': this.languageService.currentLang(),
    }
  }), {
    parse: (res: unknown) => (res as AboutApiResponse).data,
  });
}
