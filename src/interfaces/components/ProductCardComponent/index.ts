import { number } from 'yup'
import {imagesResponse} from '../../images/index'
import {IUserResponse} from '../../user/index'

export interface IProductCard {
    id: string
    images: imagesResponse[]
    model: string
    description: string
    user: IUserResponse
    year: number
    km: number
    price: number
    is_good_sale: boolean
    is_active: boolean
}