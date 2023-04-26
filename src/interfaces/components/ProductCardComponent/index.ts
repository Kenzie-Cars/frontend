import { number } from 'yup'
import {imagesResponse} from '../../images/index'
import {IUserResponse} from '../../user/index'

export interface IProductCard {
    id: string
    cover_img: string
    user: {
        name: string,
        id: string
    }
    model: string
    description: string
    year: string
    km: number
    price: string
    is_good_sale: boolean
    is_active: boolean
}