import { SeoData } from '../../home/interfaces/home-api-response.interface';

export interface MenuApiResponse {
  success: boolean;
  data: MenuDataResponse;
}

export interface MenuDataResponse {
  menu: MenuData;
  seo: SeoData;
}

export interface MenuData {
  url: string;
}
