import {
  IAddressRequest,
  IAddressResponse,
  IAddressUpdateRequest,
} from "../address";
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
  address: IAddressRequest;
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
  address: IAddressUpdateRequest;
}

export interface IUserAdvResponse {
  id: string;
  name: string;
  description: string;
  phone: string

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
  address: IAddressResponse;
}

export interface IUserLogin {
  email: string;
  userPassword: string;
}

export interface IPasswordRecovery {
  email: string
}

export interface IPasswordChange {
  password: string,
  passwordConfirmation: string
}
