import { IAdminProductCardProps, IAdvertisementResponse } from "../../interfaces/advertisement";
import { useContext, useEffect } from "react";
import { AdvertiserCardContainer } from "../../styles/components/productCard";

import Button from "../button";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import { AdvertisementContext } from "../../context/AdvertisementContext";
import { FormUpdateAdvertisement } from "../FormUpdateAdvertise";
import { useState } from "react";
import { ProductCardContext } from "../../context/productCardContext";
import { formatPrice } from '../ProductCard'


export const AdminProductCard = ({
  advertisementData,
  setUpdateModalOpen,
  userColor
}: IAdminProductCardProps) => {
  const { defineAcronym } = useContext(UserContext);

  const { setCurrentAdvertisement } = useContext(ProductCardContext)
  // const {advertisements} = useContext(AdvertisementContext)
  const { setStatusModalDelete, setCarDeleteId } = useContext(AdvertisementContext)
  const navigate = useNavigate();

  const test = () => {
    navigate(`/advertise/${advertisementData.id}`);
  };

  const setCarDeleteFunction = () => {
    setStatusModalDelete("modalOn")
    setCarDeleteId(advertisementData.id)
    // console.log(id)
  }

  return (
    <>
      <AdvertiserCardContainer background={userColor} is_active={advertisementData.is_active} discount={advertisementData.is_goodSale}>
        <div className="img-container" onClick={test}>
          <small className="active-badge">
            {advertisementData.is_active ? "Ativo" : "Inativo"}
          </small>
          <img src={advertisementData.cover_img} alt={advertisementData.model} />
        </div>

        <h3>
          {advertisementData.brand}-{advertisementData.model}
        </h3>

        <p className="description">{advertisementData.description}</p>

        <div className="advertiser-info">
          <span>{advertisementData.user["name"] && defineAcronym(advertisementData.user.name)}</span>
          <p>{advertisementData.user["name"]}</p>
        </div>

        <section className="specifications-container">
          <div>
            <span>{advertisementData.km} KM</span>
            <span>{advertisementData.year}</span>
          </div>

          <h4>R$ {formatPrice(advertisementData.price)}</h4>
        </section>

        <div>
          <Button
            size="2"
            text="Editar"
            color="grey1"
            hover="hover4"
            background="white"
            border="2px solid var(--grey1)"
            onClick={() => {
              setUpdateModalOpen(true)
              setCurrentAdvertisement(advertisementData)
            }}
          />

          <Button
            size="2"
            text="Ver Detalhes"
            color="grey1"
            hover="hover4"
            background="white"
            border="2px solid var(--grey1)"
            onClick={test}
          />
        </div>
      </AdvertiserCardContainer>
    </>

  );
};

export const createAdminProductCard = (productData: IAdvertisementResponse, openUpdateModal: React.Dispatch<React.SetStateAction<boolean>>, userColor: string) => {
  return (
    <AdminProductCard
      key={productData.id}
      advertisementData={productData}
      setUpdateModalOpen={openUpdateModal}
      userColor={userColor}
    />
  );
};
