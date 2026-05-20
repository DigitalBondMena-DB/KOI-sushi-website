import { SeoData } from '../../home/interfaces/home-api-response.interface';

export interface BranchesApiResponse {
  success: boolean;
  data: BranchesData;
}

export interface BranchesData {
  branches: Branch[];
  seo: SeoData;
}

export interface Branch {
  id: number;
  title: string;
  address: string;
  working_hours: string;
  map_url: string;
  map_embed_url: string;
  activephones: BranchPhone[];
}

export interface BranchPhone {
  branch_id: number;
  phone: string;
}
