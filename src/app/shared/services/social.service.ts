import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { httpResource } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LanguageService } from '../../core/services/language.service';
import { ApiEndpoints } from '../../core/enums/api-endpoints.enum';
import { environment } from '../../../environments/environment';
import { SocialApiResponse, SocialData } from '../interfaces/social-api-response.interface';

@Injectable({
  providedIn: 'root',
})
export class SocialService {
  private readonly http = inject(HttpClient);
  private readonly languageService = inject(LanguageService);

  readonly socialDataResource = httpResource<SocialData>(() => ({
    url: `${environment.apiUrl}${ApiEndpoints.SOCIAL}`,
    headers: {
      'Accept-Language': this.languageService.currentLang(),
    }
  }), {
    parse: (res: unknown) => (res as SocialApiResponse).data,
  });

  submitLead(leadData: { name?: string; phone: string; email: string; message: string }): Observable<any> {
    const formData = new FormData();
    if (leadData.name) {
      formData.append('name', leadData.name);
    }
    formData.append('phone', leadData.phone);
    formData.append('email', leadData.email);
    formData.append('message', leadData.message);

    return this.http.post(`${environment.apiUrl}${ApiEndpoints.LEAD}`, formData, {
      headers: {
        'Accept-Language': this.languageService.currentLang()
      }
    });
  }
}
