import { AboutHome, SeoData } from '../../home/interfaces/home-api-response.interface';

export interface AboutApiResponse {
  success: boolean;
  data: AboutPageData;
}

export interface AboutPageData {
  about: AboutHome;
  story: StoryData;
  seo: SeoData;
}

export interface StoryData {
  id: number;
  title: string;
  description: string;
  story_image: string;
}
