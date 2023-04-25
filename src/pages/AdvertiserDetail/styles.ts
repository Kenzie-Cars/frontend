import styled from "styled-components";

export const StyledAdvertiserPageContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    position: relative;
    bottom: 150px;

    overflow-x: hidden;

    .AdvertiserIcon{
        height: 104px;
        width: 104px;

        background-color: var(--brand1);
        border-radius: 50%;

        color: white;

        font-size: 36px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top: 40px;
        margin-bottom: 24px;
    }

    .AdvertiserInfo-container{
        display: flex;
        flex-direction: column;
        width: 90%;
        background-color: white;
        border-radius: 7px;
        align-items: flex-start;

        padding-left: 29px;

        max-width: 1240px;

        margin-bottom: 44px;

        padding-bottom: 40px;


    }

    .AdvertiserInfo-container button{
        margin: 0px;
    }

    hgroup{
        display: flex;
    }

    hgroup span {
        margin-left: 10px;

        background-color: var(--brand4);
        color: var(--brand1);

        font: var(--body-2-500);

        padding: 4px 8px;

        border-radius: 4px;
        margin-bottom: 24px;
    }

    p{
        margin-bottom: 40px;
        font: var(--body-1-400);
        color: var(--grey2);
    }


`

export const StyledAdvertisementsContainer = styled.section`
    width: 95%;

    display: flex;
    flex-direction: column;

    h3{
        margin-bottom: 20px;
    }

    .ProductCard-container{
        width: 100%;

        display: flex;

        align-items: flex-start;

        overflow-x: scroll;

        padding-bottom: 40px;
    }

    .ProductCard-container div{
        margin-right: 20px;
    }

    .ProductCard-container div:last-child{
        margin-right: 0px ;
    }

    .ProductCard-container div button{
        margin-right: 10px;
    }

    @media (min-width:682px){
        .ProductCard-container{
            overflow-x: auto;

            flex-wrap: wrap;

            height: fit-content;

            justify-content: space-evenly;

        }

        .ProductCard-container div{
            margin-right: 0px !important;

            margin-bottom: 13px;
        }
    }


`

export const StyledBackgroundTop = styled.div`
    background-color: var(--brand1);
    height: 250px;
`
export const StyledBackgroundBottom = styled.div`
    background-color: var(--grey8);
    height: fit-content;
`