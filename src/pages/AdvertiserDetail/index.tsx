import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StyledAdvertiserPageContainer, StyledAdvertisementsContainer, StyledBackgroundTop, StyledBackgroundBottom } from './styles'
import { useState } from "react";
import { createProductCard } from "../../components/ProductCard";
import { createAdminProductCard } from "../../components/AdminProductCard";
import { useParams } from "react-router-dom";

import Button from "../../components/button";
import Modal from "../../components/Modal";

import { mockAdvertiser, AdvertiserProductsArray } from "../../mocks/AdvertiserDetailPage";

export const AdvertiserPage = () => {

    const [userState, setUserState] = useState(mockAdvertiser)
    const [userProductsState, setUserProductsState] = useState(AdvertiserProductsArray)

    const { id } = useParams()

    const test = () => {
        console.log('abrir modal')
    }

    return id !== userState['id']?(
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
                    </div>

                    <StyledAdvertisementsContainer className="Advertisements-container">
                        <h3>Anúncios</h3>
                        <div className="ProductCard-container">{userProductsState.map((product) => createProductCard(product, userState.id))}</div>
                    </StyledAdvertisementsContainer>
                </StyledAdvertiserPageContainer>
            </StyledBackgroundBottom>
            
            <Footer/>
        </>
    ) : (
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
                            onClick={() => test()}
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