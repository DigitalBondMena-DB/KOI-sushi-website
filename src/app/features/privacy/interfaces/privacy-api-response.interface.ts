import { SeoData } from '../../home/interfaces/home-api-response.interface';

export interface PrivacyApiResponse {
  success: boolean;
  data: PrivacyPageData;
}

export interface PrivacyPageData {
  privacy: PrivacyData;
  seo: SeoData;
}

export interface PrivacyData {
  title: string;
  text: string;
}
