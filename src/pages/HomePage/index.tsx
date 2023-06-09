import { useContext, useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { createProductCard } from "../../components/ProductCard";
import { AdvertisementContext } from "../../context/AdvertisementContext";
import { Filter } from "./Filter";
import {
  StyledBackgroundImg,
  StyledHomeContainer,
  StyledCarsContainer,
} from "./style";

export const HomePage = () => {
  const [filter, setFilter] = useState(true);
  const [win, setWin] = useState(window.innerWidth <= 400 ? true : false);
  const { advertisements, setAdvertisements } =
    useContext(AdvertisementContext);
  const userId = localStorage.getItem("@userIdKenzieKars");

  useEffect(() => {
    const handleResize = () => {
      setWin(window.innerWidth <= 400 ? true : false);
      setFilter(!win);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <>
      <Navbar />
      <StyledHomeContainer>
        <StyledBackgroundImg>
          <div className="textBackgroundImg">
            <p className="coverTitle">Motors Shop</p>
            <p className="coverDescription">
              A melhor plataforma de anúncios de carro do país
            </p>
          </div>
          <img
            src="https://www.caetanobavierabmw.pt/wp-content/uploads/2021/12/BMW-Serie-4.png"
            alt="background cars"
          />
        </StyledBackgroundImg>

        <div className="bodyContainer">
          <div className="cardContainer">
            <StyledCarsContainer>
              {advertisements[0] ? (
                advertisements.map(
                  (product) =>
                    product.is_active && createProductCard(product, userId!),
                )
              ) : (
                <h3 className="no-advertisements-warning">
                  Ops, parece que ainda não tem nenhum anúncio por aqui...
                </h3>
              )}
            </StyledCarsContainer>
          </div>
          <Filter
            advertisements={advertisements}
            setAdvertisements={setAdvertisements}
            setFilter={setFilter}
            statusFilter={filter}
          />
        </div>

        {filter && (
          <button className="openFilter" onClick={() => setFilter(!filter)}>
            Filtros
          </button>
        )}
      </StyledHomeContainer>
      <Footer />
    </>
  );
};
