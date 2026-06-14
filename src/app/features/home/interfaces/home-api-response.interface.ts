import { AboutNumbers } from "../../about/interfaces/about-api-response.interface";

export interface HomeApiResponse {
  success: boolean;
  data: HomeData;
}

export interface HomeData {
  hero: HeroSlide[];
  about: AboutHome;
  bestSellers: BestSeller[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  seo: SeoData;
}

export interface HeroSlide {
  id: number;
  subtitle: string;
  title: string;
  image: string;
  description: string;
}

export interface AboutHome {
  id: number;
  title: string;
  description: string;
  main_image: string;
  numbers: AboutNumbers[];
}

export interface BestSeller {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
}

export interface Testimonial {
  id: number;
  title: string;
  comment: string;
}

export interface GalleryImage {
  id: number;
  image: string;
}

export interface SeoData {
  title: string;
  description: string;
}
