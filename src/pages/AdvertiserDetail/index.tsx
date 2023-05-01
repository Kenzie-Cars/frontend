import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import {
  StyledAdvertiserPageContainer,
  StyledAdvertisementsContainer,
  StyledBackgroundTop,
  StyledBackgroundBottom,
} from "./styles";
import { useState, useEffect, useContext } from "react";
import { createProductCard } from "../../components/ProductCard";
import { createAdminProductCard } from "../../components/AdminProductCard";
import { useParams } from "react-router-dom";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";
import Button from "../../components/button";
import { IUserResponse } from "../../interfaces/user";
import { FormCreateAdvertise } from "../../components/FormCreateAdvertise";
import { UserContext } from "../../context/UserContext";

export const AdvertiserPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [advertiser, setAdvertiser] = useState({} as IUserResponse);
  const { defineAcronym } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchAdvertisements = async () => {
      const response = await RequestApiKenzieKars.get(`users/${id}`);
      setAdvertiser(response.data);
    };
    fetchAdvertisements();
  }, []);

  const userId = localStorage.getItem("@userIdKenzieKars");

  return id !== userId ? (
    <>
      <Navbar />
      <StyledBackgroundTop />
      <StyledBackgroundBottom>
        <StyledAdvertiserPageContainer>
          <div className="AdvertiserInfo-container">
            <span className="AdvertiserIcon">
              {advertiser.name && defineAcronym(advertiser.name)}
            </span>

            <hgroup>
              <h3>{advertiser.name}</h3>

              <span>Anunciante</span>
            </hgroup>

            <p>{advertiser?.description}</p>
          </div>

          <StyledAdvertisementsContainer className="Advertisements-container">
            <h3>Anúncios</h3>
            <div className="ProductCard-container">
              {userId &&
                advertiser.advertisements?.map((product) =>
                  createProductCard(product, userId),
                )}
            </div>
          </StyledAdvertisementsContainer>
        </StyledAdvertiserPageContainer>
      </StyledBackgroundBottom>

      <Footer />
    </>
  ) : (
    <>
      <Navbar />
      <StyledBackgroundTop />
      <StyledBackgroundBottom>
        <StyledAdvertiserPageContainer>
          <div className="AdvertiserInfo-container">
            <span className="AdvertiserIcon">
              {advertiser.name && defineAcronym(advertiser.name)}
            </span>

            <hgroup>
              <h3>{advertiser.name}</h3>

              <span>Anunciante</span>
            </hgroup>

            <p>{advertiser.description}</p>

            <Button
              size="2"
              text="Criar Anúncio"
              color="brand1"
              hover="hover2"
              background="white"
              border="2px solid var(--brand1)"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>

          <StyledAdvertisementsContainer className="Advertisements-container">
            <h3>Anúncios</h3>
            <div className="ProductCard-container">
              {advertiser.advertisements?.map((product) =>
                createAdminProductCard(product),
              )}
            </div>
          </StyledAdvertisementsContainer>
        </StyledAdvertiserPageContainer>
        {isOpen && (
          <FormCreateAdvertise setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </StyledBackgroundBottom>

      <Footer />
    </>
  );
};
