import styled, { keyframes } from "styled-components";

import { IoClose } from "react-icons/io5";

export const Overlay = styled.div`
  background-color: rgba(0,0,0,.7);
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
  
  max-width: 345px;
  width: 90%;
  height: 300px;
  animation: ${modalAppear} 0.3s ease-in-out;
 



  @media (min-width: 768px) {
    height: 420px;
    max-width: 60%;
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
    font-size: var(--title1);
  }

  > h3 {
    font-size: var(--Heading-7-500);
    font-weight: var(--Heading-7-500);
    font-family: var(--Heading-7-500);
    color: var(--grey1);
  }

  > button {
    background-color: transparent;
    border: none;

    color: var(--grey4);
    font-size: var(--button-medium-text);
    font-weight: var(--button-medium-text);

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
  /* outline: 1px red solid; */
  margin: 0 auto;
  
  div {
    background-color: var(--grey7);
    /* outline: 1px red solid; */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 85%;
  }

  @media (min-width: 768px) {
    gap: 16px;
    height: 354px;
  }
`;



export const CloseIcon = styled(IoClose)``;
