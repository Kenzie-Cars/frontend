import styled, { css } from "styled-components";

interface ICardContainer {
    discount: boolean,
    is_active: boolean
}

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    max-width: 312px;

    min-width: 312px;

    box-sizing: border-box;

    img{
        max-width: 262px;
        position: relative;
        left: 21px;
    }

    h3{
        font-size: 16px;
        font-weight: 600;
        line-height: 20px;
        margin-bottom: 16px;
        
        display: -webkit-box;
        -webkit-line-clamp: 1; /* number of lines to show */
                line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .description{
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        margin-bottom: 16px;
        line-height: 24px;

        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* numero máximo de linhas */
                line-clamp: 2;
        -webkit-box-orient: vertical;
        
    }

    .img-container{
        width: 100%;
        background-color: var(--grey7);
        height: fit-content;
        min-height: 156px;
        margin-bottom: 16px;
        display: flex;
        border: 3px solid transparent;
        transition: 0.42s;
    }

    .img-container:hover{
        border-color: var(--brand1);
        cursor: pointer;
    }

    .advertiser-info{
        display: flex;
        margin-bottom: 16px;
    }

    .advertiser-info span{
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        border-radius: 50%;
        background-color: var(--brand1);
        color: white;
        font-size: 14px;
        margin-right: 8px;
        justify-content: center;
    }

    .advertiser-info p {
        display: flex;
        align-items: center;

        margin-bottom: 0px;
    }

    .specifications-container{
        display: flex;
        justify-content: space-between;

        margin-bottom: 18px;
    }

    .specifications-container div span{
        line-height: 24px;
        padding: 4px 8px;
        font-size: 14px;
        font-weight: 500;
        background-color: var(--brand4);
        color: var(--brand1);
        margin-right: 12px;
    }

    .discount-badge{
        ${({ discount }: ICardContainer) => {
        return css`
                display: ${discount ? 'flex' : 'none'};
            `;
    }}
        align-items: center;
        justify-content: center;
        font-size: 14px;
        font-weight: 500;
        color: white;
        height: 27px;
        width: 15px;
        background-color: var(--random7);
        position: relative;
        left: 24px;
        top: 7px;
        padding: 0px 2px;
    }
`

export const AdvertiserCardContainer = styled(CardContainer) <{ is_active?: boolean }>`
    .active-badge{
        position: relative;
        height: 24px;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
        ${({ is_active }: ICardContainer) => {
        return css`
                background-color: var(--${is_active ? 'brand1' : 'grey4'}) ;
            `;
    }}
        padding: 0px 8px;
        margin-left: 16px;
        margin-top: 12px;
    }

    .discount-badge{
        ${({ is_active }: ICardContainer) => {
        return css`
                left: ${is_active ? '40px' : '50px'} ;
            `;
    }}
        min-width: 15px;
    }

    img {
        ${({ is_active }: ICardContainer) => {
        return css`
                left: ${is_active ? '-37px' : '-47px'} ;
            `;
    }}
    }
`
