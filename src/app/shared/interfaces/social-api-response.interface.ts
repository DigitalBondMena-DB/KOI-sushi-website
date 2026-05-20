import { SeoData } from '../../features/home/interfaces/home-api-response.interface';

export interface SocialApiResponse {
  success: boolean;
  data: SocialData;
}

export interface SocialData {
  contactus: ContactUsDetails;
  phones: PhoneItem[];
  socialmedias: SocialMedia[];
  seo: SeoData;
}

export interface ContactUsDetails {
  id: number;
  footer_Text: string;
  address: string;
  email: string;
}

export interface PhoneItem {
  id: number;
  phone: string;
}

export interface SocialMedia {
  id: number;
  social_icon: string;
  social_url: string;
  social_name: string;
}
