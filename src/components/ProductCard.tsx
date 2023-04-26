import React from "react";
import { IProductCard } from "../interfaces/components/ProductCardComponent";
import {
  CardContainer,
  AdvertiserCardContainer,
} from "../styles/components/productCard";
import { IUserResponse } from "../interfaces/user";

export const defineAcronym = (username: string) => {
  const acronym = username.includes(" ")
    ? (
        username.split(" ")[0][0] +
        "" +
        username.split(" ")[1][0]
      ).toUpperCase()
    : (
        username.split(" ")[0][0] +
        "" +
        username.split(" ")[0][1]
      ).toUpperCase();

      return acronym
}

export const ProductCard = ({
  cover_img,
  model,
  description,
  year,
  user,
  km,
  price,
  is_good_sale,
  is_active
}: IProductCard) => {
  return (
    <CardContainer is_active={is_active} discount={is_good_sale}>
      <div className="img-container">
        <img src={cover_img} alt={model} />
        <small className="discount-badge">$</small>
      </div>

      <h3>{model}</h3>

      <p className="description">{description}</p>

      <div className="advertiser-info">
        <span>{user.name && defineAcronym(user.name)}</span>
        <p>{user["name"]}</p>
      </div>

      <section className="specifications-container">
        <div>
          <span>{km} KM</span>
          <span>{year}</span>
        </div>

        <h4>R$ {price}</h4>
      </section>
    </CardContainer>
  );
};

export const AdvertiserProductCard = ({
  cover_img,
  model,
  description,
  year,
  km,
  user,
  price,
  is_good_sale,
  is_active,
}: IProductCard) => {
  return (
    <AdvertiserCardContainer discount={is_good_sale} is_active={is_active}>
      <div className="img-container">
        <small className="active-badge">
          {is_active ? "Ativo" : "Inativo"}
        </small>
        <img src={cover_img} alt={model} />
        <small className="discount-badge">$</small>
      </div>

      <h3>{model}</h3>

      <p className="description">{description}</p>

      <div className="advertiser-info">
        <span>{user.name && defineAcronym(user.name)}</span>
        <p>{user["name"]}</p>
      </div>

      <section className="specifications-container">
        <div>
          <span>{km} KM</span>
          <span>{year}</span>
        </div>

        <h4>R$ {price}</h4>
      </section>
    </AdvertiserCardContainer>
  );
};

export function createProductCard(productData: IProductCard, currentUserId: string) {
  return currentUserId === productData.user.id ? (
    <AdvertiserProductCard
      id={productData.id}
      key={productData.id}
      cover_img={productData.cover_img}
      model={productData.model}
      description={productData.description}
      year={productData.year}
      price={productData.price}
      user={productData.user}
      km={productData.km}
      is_good_sale={productData.is_good_sale}
      is_active={productData.is_active}
    />
  ) : (
    <ProductCard
      id={productData.id}
      key={productData.id}
      cover_img={productData.cover_img}
      model={productData.model}
      description={productData.description}
      year={productData.year}
      price={productData.price}
      user={productData.user}
      km={productData.km}
      is_good_sale={productData.is_good_sale}
      is_active={productData.is_active}
    />
  );
}
