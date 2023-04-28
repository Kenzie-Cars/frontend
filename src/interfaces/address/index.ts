export interface IAddressRequest {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export interface IAddressResponse {
  id: string;
  cep: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement: string;
  user_id: string;
}

export interface IAddressUpdate {
  cep?: string;
  state?: string;
  city?: string;
  street?: string;
  number?: string;
  complement?: string;
}

export interface IAddressUpdateRequest {
  address: IAddressUpdate;
}
