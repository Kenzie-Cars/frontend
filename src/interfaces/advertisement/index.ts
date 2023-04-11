export interface advertisementRequest {
    brand: string
    model: string
    year: string
    fuel: string
    km: number
    color: string
    FIPE_price: number
    price: number
    description: string
    is_good_sale: boolean
    is_active: boolean
}

export interface advertisementResponse {
    id: string
    brand: string
    model: string
    year: string
    fuel: string
    km: number
    color: string
    FIPE_price: number
    price: number
    description: string
    is_good_sale: boolean
    is_active: boolean
    created_at: Date
    updated_at: Date
    user_id: string
}