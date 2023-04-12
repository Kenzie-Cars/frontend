import { number } from 'yup'
import {imagesResponse} from '../../images/index'
import {IUserResponse} from '../../user/index'

export interface IProductCard {
    images: imagesResponse[],
    model: string,
    description: string,
    user: IUserResponse,
    year: number,
    km: number,
    price: number
}