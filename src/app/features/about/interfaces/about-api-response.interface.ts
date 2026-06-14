import { AboutHome, SeoData } from '../../home/interfaces/home-api-response.interface';

export interface AboutApiResponse {
  success: boolean;
  data: AboutPageData;
}

export interface AboutPageData {
  about: AboutHome;
  numbers: AboutNumbers;
  story: StoryData;
  seo: SeoData;
}

export interface AboutNumbers {
  text: string;
  number: string;
}

export interface StoryData {
  id: number;
  title: string;
  description: string;
  story_image: string;
}
