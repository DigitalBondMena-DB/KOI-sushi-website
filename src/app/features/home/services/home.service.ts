import { Injectable, inject } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { ApiEndpoints } from '../../../core/enums/api-endpoints.enum';
import { HomeApiResponse, HomeData } from '../interfaces/home-api-response.interface';
import { LanguageService } from '../../../core/services/language.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private readonly languageService = inject(LanguageService);

  readonly homeDataResource = httpResource<HomeData>(() => ({
    url: `${environment.apiUrl}${ApiEndpoints.HOME}`,
    headers: {
      'Accept-Language': this.languageService.currentLang(),
    }
  }), {
    parse: (res: unknown) => (res as HomeApiResponse).data,
  });
}
