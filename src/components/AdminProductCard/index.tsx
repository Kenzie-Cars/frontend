import { useContext } from "react";
import { IProductCard } from "../../interfaces/components/ProductCardComponent";
import { AdvertiserCardContainer } from "../../styles/components/productCard";

import Button from "../button";
import { UserContext } from "../../context/UserContext";

export const AdminProductCard = ({
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
  const { defineAcronym } = useContext(UserContext);
  return (
    <AdvertiserCardContainer is_active={is_active} discount={is_good_sale}>
      <div className="img-container">
        <small className="active-badge">
          {is_active ? "Ativo" : "Inativo"}
        </small>
        <img src={cover_img} alt={model} />
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
    </AdvertiserCardContainer>
  );
};

export const createAdminProductCard = (productData: IProductCard) => {
  return (
    <AdminProductCard
      id={productData.id}
      key={productData.id}
      cover_img={productData.cover_img}
      model={productData.model}
      description={productData.description}
      year={productData.year}
      price={productData.price}
      km={productData.km}
      is_good_sale={productData.is_good_sale}
      is_active={productData.is_active}
      user={productData.user}
    />
  );
};
