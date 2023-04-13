import React from 'react'
import { IProductCard } from '../interfaces/components/ProductCardComponent'
import { CardContainer, AdvertiserCardContainer } from '../styles/components/productCard'

export const ProductCard = 
({
    images,
    model,
    description, 
    user,
    year,
    km,
    price,
    is_good_sale,
}: IProductCard) => {
    return (
    
        <CardContainer discount={is_good_sale}>
            <div className='img-container'>
                <img src={images[0]['url']} alt={images[0]['title']} />
                <small className='discount-badge'>$</small>
            </div>

            <h3>{model}</h3>

            <p className='description'>{description}</p>

            <div className='advertiser-info'>
                <span>{user.name[0]}</span>
                <p>{user['name']}</p>
            </div>

            <section className='specifications-container'>
                <div>
                    <span>{km} KM</span>
                    <span>{year}</span>
                </div>

                <h4>R$ {price}</h4>
            </section>
        </CardContainer>
        
    ) 
}


export const AdvertiserProductCard = 
({
    images,
    model,
    description, 
    user,
    year,
    km,
    price,
    is_good_sale,
    is_active

}: IProductCard) => {

    return(
        
        <AdvertiserCardContainer discount={is_good_sale} is_active={is_active}>
            <div className='img-container'>
                <small className='active-badge'>{is_active? 'Ativo': 'Inativo'}</small>
                <img src={images[0]['url']} alt={images[0]['title']} />
                <small className='discount-badge'>$</small>
            </div>

            <h3>{model}</h3>

            <p className='description'>{description}</p>

            <div className='advertiser-info'>
                <span>{user.name[0]}</span>
                <p>{user['name']}</p>
            </div>

            <section className='specifications-container'>
                <div>
                    <span>{km} KM</span>
                    <span>{year}</span>
                </div>

                <h4>R$ {price}</h4>
            </section>
        </AdvertiserCardContainer>

    ) 
    
}

export function createProductCard(productData: IProductCard, userId: string){
    return userId === productData.user.id?
    <AdvertiserProductCard
        id={productData.id} 
        key={productData.id}
        images={productData.images} 
        model={productData.model} 
        description={productData.description}
        year={productData.year} 
        price={productData.price} 
        user={productData.user} 
        km={productData.km}
        is_good_sale={productData.is_good_sale}
        is_active={productData.is_active}
    /> :

    <ProductCard
        id={productData.id} 
        key={productData.id}
        images={productData.images} 
        model={productData.model} 
        description={productData.description}
        year={productData.year} 
        price={productData.price} 
        user={productData.user} 
        km={productData.km}
        is_good_sale={productData.is_good_sale}
        is_active={productData.is_active}
    />
}