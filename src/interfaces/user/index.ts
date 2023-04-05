export interface IUserRequest {
    name: string
    email: string
    cpf: string
    phone: string
    birthdate: Date
    description: string
    password: string
    is_adm?: boolean
    is_active?: boolean
    is_seller: boolean
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
    is_adm: boolean
    is_active: boolean
    is_seller: boolean
    created_at: Date
    updated_at: Date
}


