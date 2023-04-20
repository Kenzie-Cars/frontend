import { IAddressResquest } from "../address"

export interface IUserRequest {
    name: string
    email: string
    cpf: string
    phone: string
    birthdate: Date
    description: string
    password: string
    confirmPassword: string
    is_seller?: boolean
    address: IAddressResquest
    // cep: string
    // state: string
    // city: string
    // street: string
    // number: string
    // complement: string
}

export interface IUserResponse {
    id: string
    name: string
    email: string
    cpf: string
    phone: string
    birthdate: Date
    description: string
    password: string
    cep: string
    state: string
    city: string
    street: string
    number: string
    complement: string
    is_adm: boolean
    is_active: boolean
    is_seller: boolean
    created_at: Date
    updated_at: Date
}


