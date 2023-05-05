import styled, { keyframes } from "styled-components";

export const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
`;

const modalAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  background-color: var(--whiteFixed);

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 7px;

  margin: 0 auto;
  padding-bottom: 1rem;

  max-width: 345px;
  width: 90%;
  min-height: 300px;
  max-height: fit-content;
  animation: ${modalAppear} 0.3s ease-in-out;

  @media (min-width: 768px) {
    height: max-content;
    max-width: 520px;
    padding-bottom: 1.5rem;
    border-radius: 4px;
    gap: 16px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;

  width: 100%;
  height: 40px;

  padding: 20px;

  @media (min-width: 768px) {
    height: 50px;
    font: var(--button-medium-text);
  }

  > h3,
  > HeaderTitle {
    color: var(--grey1);
  }

  > div,
  > CloseButton {
    background-color: transparent;
    border: none;
    width: fit-content;
    color: var(--grey4);
    font: var(--button-medium-text);
    cursor: pointer;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;

  width: 100%;
  height: 90%;
  margin: 0 auto;


  
  
  /* > div, */
  > CarImg {
    background-color: var(--grey7);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 85%;

    img {
      width: inherit;
      max-height: 100%;
      height: fit-content;
      
    }
  }

  .buttonBox{
    width: inherit;
    height: 25px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    > button {
      text-align: center;
      background-color: var(--brand1);
      color: var(--whiteFixed);
      height: inherit;
    }
  }

  @media (min-width: 768px) {
    gap: 16px;
    width: 100%;
    height: 100%;
  }
`;

export const HeaderTitle = styled.h3``;

export const CloseButton = styled.div`
  & > svg {
    color: var(--grey4);
    width: 30px;
    height: 30px;
    font-size: 1.5rem;
  }
`;

//para usar no detalhamento do carro
export const CarImg = styled.div``;
