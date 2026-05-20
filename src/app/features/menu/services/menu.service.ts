import { inject, Injectable } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { LanguageService } from '../../../core/services/language.service';
import { ApiEndpoints } from '../../../core/enums/api-endpoints.enum';
import { environment } from '../../../../environments/environment';
import { MenuApiResponse, MenuDataResponse } from '../interfaces/menu-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private readonly languageService = inject(LanguageService);

  readonly menuDataResource = httpResource<MenuDataResponse>(() => ({
    url: `${environment.apiUrl}${ApiEndpoints.MENU}`,
    headers: {
      'Accept-Language': this.languageService.currentLang(),
    }
  }), {
    parse: (res: unknown) => (res as MenuApiResponse).data,
  });
}
