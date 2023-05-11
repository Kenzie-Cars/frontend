import { useNavigate } from "react-router-dom";
import { IAdvertisementResponse } from "../interfaces/advertisement";
import { useContext } from "react";
import { IProductCard } from "../interfaces/components/ProductCardComponent";
import {
  AdvertiserCardContainer,
  CardContainer,
} from "../styles/components/productCard";
import { UserContext } from "../context/UserContext";

export const formatPrice = (price: number) => {
  var parts = price.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return parts.join(".");
}

export const ProductCard = ({
  id,
  cover_img,
  brand,
  model,
  description,
  year,
  user,
  km,
  price,
  is_goodSale,
  is_active,
}: IProductCard) => {
  const navigate = useNavigate();

  const advertise = () => {
    navigate(`/advertise/${id}`);
  };

  const { defineAcronym } = useContext(UserContext);

  return (
    <CardContainer
      is_active={is_active}
      discount={is_goodSale}
      onClick={() => advertise()}
    >
      <div className="img-container">
        <img src={cover_img} alt={model} />
        <small className="discount-badge">$</small>
      </div>

      <h3>
        {brand} - {model}
      </h3>

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

        <h4>R$ {formatPrice(price)}</h4>
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
  is_goodSale,
  is_active,
  brand,
  id,
}: IAdvertisementResponse) => {
  const navigate = useNavigate();

  const advertise = () => {
    navigate(`/advertise/${id}`);
  };
  const { defineAcronym } = useContext(UserContext);
  const userId = localStorage.getItem("@userIdKenzieKars");
  const test = userId === user.id;
  return (
    <AdvertiserCardContainer
      discount={is_goodSale}
      is_active={is_active}
    >
      <div className="img-container" onClick={advertise}>
        {test && (
          <small className="active-badge">
            {is_active ? "Ativo" : "Inativo"}
          </small>
        )}
        <img src={cover_img} alt={model} />
        <small className="discount-badge">$</small>
      </div>

      <h3>
        {brand} - {model}
      </h3>

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

        <h4>R$ {formatPrice(price)}</h4>
      </section>
    </AdvertiserCardContainer>
  );
};

export function createProductCard(
  productData: IAdvertisementResponse,
  currentUserId: string,
) {
  return currentUserId === productData.user.id ? (
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
      is_goodSale={productData.is_goodSale}
      is_active={productData.is_active}
      brand={productData.brand}
      images={productData.images}
    />
  ) : (
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
      is_goodSale={productData.is_goodSale}
      is_active={productData.is_active}
      brand={productData.brand}
      images={productData.images}
      fuel={""}
      color={""}
      created_at={productData.created_at}
      updated_at={productData.updated_at}
      userAdvertisements={productData.userAdvertisements}
    />
  );
}
