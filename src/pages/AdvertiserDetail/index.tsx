import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { StyledAdvertiserPageContainer, StyledAdvertisementsContainer, StyledBackgroundTop, StyledBackgroundBottom } from './styles'
import { useState, useEffect, useContext } from "react";
import { createProductCard } from "../../components/ProductCard";
import { createAdminProductCard } from "../../components/AdminProductCard";
import { useParams } from "react-router-dom";
import { RequestApiKenzieKars } from "../../Requests/RequestApiKenzieKars";

import Button from "../../components/button";
import Modal from "../../components/Modal";

import { mockAdvertiser, AdvertiserProductsArray } from "../../mocks/AdvertiserDetailPage";
import { IUserResponse } from "../../interfaces/user";
import { IProductCard } from "../../interfaces/components/ProductCardComponent";
import { UserContext } from "../../context/UserContext";
import { FormCreateAdvertise } from "../../components/FormCreateAdvertise";

export const AdvertiserPage = () => {

    const {user} = useContext(UserContext)
    const [isOpen, setIsOpen] = useState(false);
    const [userState, setUserState] = useState(mockAdvertiser)
    const [advertiser, setAdvertiser] = useState(mockAdvertiser)  

    const { id } = useParams()

     useEffect(() => {
         const fetchAdvertisements = async () => {
             const response = await RequestApiKenzieKars.get(`users/${id}`)
             setAdvertiser(response.data)
         }
         fetchAdvertisements()
     }, [])

    const test = () => {
        setIsOpen(true)
    }

    const userId = localStorage.getItem('@userIdKenzieKars')

    return id !== userId ?(
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
                        <div className="ProductCard-container">{advertiser.advertisements.map((product) => createProductCard(product, userState.id))}</div>
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
                        <div className="ProductCard-container">{advertiser.advertisements.map((product) => createAdminProductCard(product))}</div>
                    </StyledAdvertisementsContainer>
                </StyledAdvertiserPageContainer>
                {isOpen && <FormCreateAdvertise setIsOpen={setIsOpen} isOpen={isOpen}/>}
            </StyledBackgroundBottom>
            
            <Footer/>
        </>
    )
}