import { IAdvertisementResponse } from "../../interfaces/advertisement";
import { useContext } from "react";
import { AdvertiserCardContainer } from "../../styles/components/productCard";

import Button from "../button";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { AdvertisementContext } from "../../context/AdvertisementContext";


export const AdminProductCard = ({
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
  const { defineAcronym } = useContext(UserContext);
  // const {advertisements} = useContext(AdvertisementContext)
  const { setStatusModalDelete, setCarDeleteId } = useContext(AdvertisementContext)
  const navigate = useNavigate();

  const test = () => {
    navigate(`/advertise/${id}`);
  };

  const setCarDeleteFunction = () => {
    setStatusModalDelete("modalOn")
    setCarDeleteId(id)
    console.log(id)
  }

  return (
    <AdvertiserCardContainer is_active={is_active} discount={is_goodSale}>
      <div className="img-container">
        <small className="active-badge">
          {is_active ? "Ativo" : "Inativo"}
        </small>
        <img src={cover_img} alt={model} />
      </div>

      <h3>
        {brand}-{model}
      </h3>

      <p className="description">{description}</p>

      <div className="advertiser-info">
        <span>{user["name"] && defineAcronym(user.name)}</span>
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
          onClick={setCarDeleteFunction}
        />

        <Button
          size="2"
          text="Ver Detalhes"
          color="grey1"
          hover="hover4"
          background="white"
          border="2px solid var(--grey1)"
          onClick={() => test()}
        />
      </div>
    </AdvertiserCardContainer>
  );
};

export const createAdminProductCard = (productData: IAdvertisementResponse) => {
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
      is_goodSale={productData.is_goodSale}
      is_active={productData.is_active}
      user={productData.user}
      brand={productData.brand}
      color={productData.color}
      created_at={productData.created_at}
      fuel={productData.fuel}
      images={productData.images}
      updated_at={productData.updated_at}
    />
  );
};
