import { IAddressResquest } from "../address";
import { IAdvertisementResponse } from "../advertisement";

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  description: string;
  password: string;
  confirmPassword: string;
  is_seller?: boolean;
  is_adm?: boolean;
  address: IAddressResquest;
}
export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthDate?: string;
  description?: string;
  password?: string;
  confirmPassword?: string;
  is_seller?: boolean;
  is_adm?: boolean;
  address: IAddressResquest;
}

export interface IUserResponse {
  is_goodSale: boolean | undefined;
  cover_img: string;
  id: string;
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthDate: string;
  description: string;
  password: string;
  is_adm: boolean;
  is_active: boolean;
  is_seller: boolean;
  created_at: Date;
  updated_at: Date;
  advertisements: IAdvertisementResponse[]
}

export interface IUserLogin {
  email: string;
  password: string;
}
