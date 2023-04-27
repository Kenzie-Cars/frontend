export interface IAdvertisementRequest {
  user: any;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  FIPE_price: number;
  price: number;
  description: string;
  is_goodSale: boolean;
  is_active: boolean;
  cover_img: string;
  images?: string[];
}

export interface IAdvertisementResponse {
  id?: string;
  user: any;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  FIPE_price?: number;
  price: number;
  description: string;
  cover_img: string;
  is_goodSale?: boolean;
  images?: string[];
  is_active?: boolean;
  created_at?: Date;
  updated_at?: Date;
  user_id?: string;
}
