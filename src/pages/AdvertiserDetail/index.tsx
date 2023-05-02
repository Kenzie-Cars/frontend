import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createAdminProductCard } from "../../components/AdminProductCard";
import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { createProductCard } from "../../components/ProductCard";
import {
  StyledAdvertisementsContainer,
  StyledAdvertiserPageContainer,
  StyledBackgroundBottom,
  StyledBackgroundTop,
} from "./styles";
import Button from "../../components/button";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";
import { FormCreateAdvertise } from "../../components/FormCreateAdvertise";
import { IUserResponse } from "../../interfaces/user";
import { UserContext } from "../../context/UserContext";

export const AdvertiserPage = () => {
  const [loading, setLoading] = useState(true);
  const [advertiser, setAdvertiser] = useState({} as IUserResponse);
  const [isOpen, setIsOpen] = useState(false);

  const { defineAcronym } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchAdvertisements = async () => {
      const response = await RequestApiKenzieKars.get(`users/${id}`);
      setAdvertiser(response.data);
    };
    fetchAdvertisements();
  }, []);

  useEffect(() => {
    setLoading(false);
  }, [advertiser]);

  const test = () => {
    setIsOpen(true);
  };

  {
    if (!loading) {
      return id !== advertiser?.id ? (
        <>
          <Navbar />
          <StyledBackgroundTop />
          <StyledBackgroundBottom>
            <StyledAdvertiserPageContainer>
              <div className="AdvertiserInfo-container">
                <span className="AdvertiserIcon">
                  {advertiser?.name && defineAcronym(advertiser?.name)}
                </span>

                <hgroup>
                  <h3>{advertiser?.name}</h3>

                  <span>Anunciante</span>
                </hgroup>

                <p>{advertiser?.description}</p>
              </div>

              <StyledAdvertisementsContainer className="Advertisements-container">
                <h3>Anúncios</h3>
                <div className="ProductCard-container">
                  {advertiser?.id &&
                    advertiser?.advertisements?.map((product) =>
                      createProductCard(product, advertiser?.id),
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
                  {advertiser?.name && defineAcronym(advertiser?.name)}
                </span>

                <hgroup>
                  <h3>{advertiser?.name}</h3>

                  <span>Anunciante</span>
                </hgroup>

                <p>{advertiser?.description}</p>

                <Button
                  size="2"
                  text="Criar Anúncio"
                  color="brand1"
                  hover="hover2"
                  background="white"
                  border="2px solid var(--brand1)"
                  onClick={() => test()}
                />
              </div>

              <StyledAdvertisementsContainer className="Advertisements-container">
                <h3>Anúncios</h3>
                <div className="ProductCard-container">
                  {advertiser?.advertisements?.map((product) =>
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
    }
    return <h1>Loading...</h1>;
  }
};
