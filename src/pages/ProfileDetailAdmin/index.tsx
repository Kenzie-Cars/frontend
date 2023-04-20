import { Footer } from "../../components/Footer";
import { StyledAdvertiserPageContainer, StyledAdvertisementsContainer, StyledBackgroundTop, StyledBackgroundBottom } from '../AdvertiserDetail/styles'
import { useState } from "react";
import { createAdminProductCard } from "../../components/AdminProductCard";

import Button from "../../components/button";

import { mockAdvertiser, AdvertiserProductsArray } from "../../mocks/AdvertiserDetailPage";

export const AdvertiserPageAdmin = () => {

    const [userState, setUserState] = useState(mockAdvertiser)
    const [userProductsState, setUserProductsState] = useState(AdvertiserProductsArray)

    return (
        <>
            <StyledBackgroundTop/>
            <StyledBackgroundBottom>
                <StyledAdvertiserPageContainer>
                    <div className="AdvertiserInfo-container">
                        <span className="AdvertiserIcon">SL</span>

                        <hgroup>
                            <h3>{userState.name}</h3>

                            <span>Anunciante</span>
                        </hgroup>

                        <p>{userState.description}</p>

                        <Button
                            size="2"
                            text="Criar Anúncio"
                            color="brand1"
                            hover="hover2"
                            background="white"
                            border="2px solid var(--brand1)"
                        />
                    </div>

                    <StyledAdvertisementsContainer className="Advertisements-container">
                        <h3>Anúncios</h3>
                        <div className="ProductCard-container">{userProductsState.map((product) => createAdminProductCard(product))}</div>
                    </StyledAdvertisementsContainer>
                </StyledAdvertiserPageContainer>
            </StyledBackgroundBottom>
            
            <Footer/>
        </>
    )
}