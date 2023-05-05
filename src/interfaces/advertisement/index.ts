import { SetStateAction } from "react";
import { ICommentsResponse } from "../comments";
import { IUserResponse } from "../user";

export interface ImagesInterface {
  id: string
  image1?: string
  image2?: string
  image3?: string
  image4?: string
  image5?: string
  image6?: string
}

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
  images?: ImagesInterface[];
}

export interface IAdvertisementResponse {
  id: string;
  user: IUserResponse;
  brand: string;
  model: string;
  year: number;
  fuel: string;
  km: number;
  color: string;
  price: number;
  description: string;
  cover_img: string;
  is_goodSale: boolean;
  images: ImagesInterface[];
  userAdvertisements: ICommentsResponse
  is_active: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface IAdminProductCardProps{
  advertisementData: IAdvertisementResponse
  setUpdateModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}
