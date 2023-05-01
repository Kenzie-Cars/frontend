
export interface IProductCard {
    id: string
    cover_img: string
    user: {
        name: string,
        id: string,
        description: string
    }
    model: string
    description: string
    year: number
    km: number
    brand: string
    price: string
    is_goodSale: boolean
    is_active: boolean
    images: string[]
}