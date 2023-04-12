import styled from "styled-components";

export const StyledCarsContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 10px;
  height: 500px;
  margin-bottom: 10px;
`;

export const StyledCard = styled.li`
  display: flex;
  flex-direction: column;
  min-width: 280px;
  margin: 10px;
  height: 500px;
  h2 {
    margin: 10px 0;
    font: var(--Heading-7-600);
  }
  .imgContainer {
    width: 280px;
    background-color: var(--grey7);
    img {
      width: 260px;
      height: 150px;
    }
  }
  .cardDescription {
    margin: 10px 0;
    max-width: 100%;
    font: var(--body-2-400);
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
  .carInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
    div{
        display:flex ;
        gap: 10px;
        font: var(--body-2-500);
        p{
            padding: 4px 8px;
            border-radius: 4px;
            color: var(--brand1);
            background-color: var(--brand4);
        }
    }
  }
`;
