export interface IAdvertisementRequest {
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  FIPE_price: number;
  price: number;
  description: string;
  //   //   is_good_sale: boolean;
  //   is_active: boolean;
  cover_img: string;
  images?: string[];
}

export interface advertisementResponse {
  id: string;
  brand: string;
  model: string;
  year: string;
  fuel: string;
  km: number;
  color: string;
  FIPE_price: number;
  price: number;
  description: string;
  is_good_sale: boolean;
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
  user_id: string;
}
