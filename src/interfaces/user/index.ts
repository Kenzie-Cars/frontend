import { IAddressResquest } from "../address"

export interface IUserRequest {
    name: string
    email: string
    cpf: string
    phone: string
    birthDate: string
    description: string
    password: string
    confirmPassword: string
    is_seller?: boolean
    address: IAddressResquest
}

export interface IUserResponse {
    id: string
    name: string
    email: string
    cpf: string
    phone: string
    birthDate: Date
    description: string
    password: string
    is_adm: boolean
    is_active: boolean
    is_seller: boolean
    created_at: Date
    updated_at: Date
}


