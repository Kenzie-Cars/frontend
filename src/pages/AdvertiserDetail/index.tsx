import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";
import { createAdminProductCard } from "../../components/AdminProductCard";
import { Footer } from "../../components/Footer";
import { FormCreateAdvertise } from "../../components/FormCreateAdvertise";
import { FormUpdateAdvertisement } from "../../components/FormUpdateAdvertise";
import { DeleteCarModal } from "../../components/ModalDeleteCars";
import { Navbar } from "../../components/Navbar";
import { createProductCard } from "../../components/ProductCard";
import Button from "../../components/button";
import { AdvertisementContext } from "../../context/AdvertisementContext";
import { UserContext } from "../../context/UserContext";
import { ProductCardContext } from "../../context/productCardContext";
import {
  StyledAdvertisementsContainer,
  StyledAdvertiserPageContainer,
  StyledBackgroundBottom,
  StyledBackgroundTop,
} from "./styles";

export const AdvertiserPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const { loading, setLoading, advertiser, setAdvertiser } =
    useContext(UserContext);

  const { currentAdvertisement, setCurrentAdvertisement } =
    useContext(ProductCardContext);

  const { defineAcronym, user } = useContext(UserContext);
  const { advertisements } = useContext(AdvertisementContext);

  const { id } = useParams();

  useEffect(() => {
    const fetchAdvertisements = async () => {
      const response = await RequestApiKenzieKars.get(`users/${id}`);
      setAdvertiser(response.data);
    };
    fetchAdvertisements();
  }, [advertisements, loading]);

  useEffect(() => {
    setLoading(false);
  }, [advertiser]);

  const test = () => {
    setIsOpen(true);
  };

  {
    if (!loading) {
      return id !== user?.id ? (
        <>
          <Navbar />
          <StyledBackgroundTop background={advertiser?.userColor} />
          <StyledBackgroundBottom>
            <StyledAdvertiserPageContainer background={advertiser?.userColor}>
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
          <StyledBackgroundTop background={user?.userColor} />
          <StyledBackgroundBottom>
            <StyledAdvertiserPageContainer background={user?.userColor}>
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
                  {advertiser?.advertisements?.[0] ? (
                    advertiser.advertisements.map((product) =>
                      createAdminProductCard(
                        product,
                        setIsUpdateModalOpen,
                        advertiser.userColor,
                      ),
                    )
                  ) : (
                    <h3 className="no-advertisements-warning">
                      Ops, parece que ainda não tem nenhum anúncio por aqui...
                    </h3>
                  )}
                </div>
              </StyledAdvertisementsContainer>
            </StyledAdvertiserPageContainer>
            {isOpen && (
              <FormCreateAdvertise setIsOpen={setIsOpen} isOpen={isOpen} />
            )}
            {isUpdateModalOpen && (
              <FormUpdateAdvertisement
                setIsOpen={setIsUpdateModalOpen}
                isOpen={isUpdateModalOpen}
                advertisementData={currentAdvertisement}
              />
            )}
          </StyledBackgroundBottom>

          <DeleteCarModal />
          <Footer />
        </>
      );
    }
    return <h1>Loading...</h1>;
  }
};
