import { IProductCard } from "../../interfaces/components/ProductCardComponent";
import { IUserResponse } from "../../interfaces/user";
import {
  CardContainer,
  AdvertiserCardContainer,
} from "../../styles/components/productCard";

import Button from "../button";

export const AdminProductCard = ({
  images,
  model,
  description,
  year,
  km,
  user,
  price,
  is_good_sale,
}: IProductCard) => {
  return (
    <CardContainer discount={is_good_sale}>
      <div className="img-container">
        <img src={images[0]["url"]} alt={model} />
      </div>

      <h3>{model}</h3>

      <p className="description">{description}</p>

      <div className="advertiser-info">
        <span>{user.name[0]}</span>
        <p>{user["name"]}</p>
      </div>

      <section className="specifications-container">
        <div>
          <span>{km} KM</span>
          <span>{year}</span>
        </div>

        <h4>R$ {price}</h4>
      </section>

     <div>
      <Button
        size="2"
        text="Editar"
        color="grey1"
        hover="hover4"
        background="white"
        border="2px solid var(--grey1)"
      />

      <Button
        size="2"
        text="Ver Detalhes"
        color="grey1"
        hover="hover4"
        background="white"
        border="2px solid var(--grey1)"
      />
     </div>
    </CardContainer>
  );
};

export const createAdminProductCard = (productData: IProductCard) => {
  return (
    <AdminProductCard
      id={productData.id}
      key={productData.id}
      images={productData.images}
      model={productData.model}
      description={productData.description}
      year={productData.year}
      price={productData.price}
      km={productData.km}
      is_good_sale={productData.is_good_sale}
      is_active={productData.is_active}
      user={productData.user}
    />
  )
}