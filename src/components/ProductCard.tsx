import { useContext } from "react";
import { IProductCard } from "../interfaces/components/ProductCardComponent";
import {
  CardContainer,
  AdvertiserCardContainer,
} from "../styles/components/productCard";
import { UserContext } from "../context/UserContext";

export const ProductCard = ({
  cover_img,
  model,
  description,
  year,
  user,
  km,
  price,
  is_good_sale,
  is_active,
}: IProductCard) => {
  const { defineAcronym } = useContext(UserContext);
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
  const { defineAcronym } = useContext(UserContext);

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

export function createProductCard(
  productData: IProductCard,
  currentUserId: string,
) {
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
