import styled from "styled-components";

export const StyledCarsContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 50px;
  height: fit-content;
  margin: 50px 0;

  @media screen and (min-width: 400px) {
    overflow-x: unset;
    flex-wrap: wrap;
  }
`;

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 280px;
  margin: 10px;
  h2 {
    width: fit-content;
    margin: 10px 0;
    font: var(--Heading-7-600);
  }
  .imgContainer {
    width: 280px;
    background-color: var(--grey7);
    
    img {
      width: 280px;
      height: 170px;
      object-fit: contain;
    }
  }
  .cardDescription {
    margin: 10px 0;
    max-width: 100%;
    font: var(--body-2-400);
    text-align: left;
  }
  .advertiserInfo {
    display: flex;
    gap: 5px;
    align-items: center;
    p {
      background-color: var(--brand2);
      padding: 4px;
      color: var(--whiteFixed);
      border-radius: 50%;
      height: 30px;
      width: 30px;
      text-align: center;
    }
  }
  .carInfo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      display: flex;
      gap: 10px;
      font: var(--body-2-500);
      p {
        padding: 4px 8px;
        border-radius: 4px;
        color: var(--brand1);
        background-color: var(--brand4);
      }
    }
  }
`;
