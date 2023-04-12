import React from 'react'
import { IProductCard } from '../interfaces/components/ProductCardComponent'

export const ProductCard = 
({
    images,
    model,
    description, 
    user,
    year,
    km,
    price
}: IProductCard) => {
    return (
    
        <>
            <img src={images[0]['url']} alt={images[0]['title']} />

            <h3>{model}</h3>

            <p>{description}</p>

            <div>
                <img src="" alt="" />
                <p>{user['name']}</p>
            </div>

            <section>
                <div>
                    <span>{km}</span>
                    <span>{year}</span>
                </div>

                <h4>R$ {price}</h4>
            </section>
        </>
        
    ) 
}
