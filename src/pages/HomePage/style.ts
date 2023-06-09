import styled from "styled-components";

export const StyledHomeContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
  button {
    font: var(--button-big-text);
    color: var(--whiteFixed);
    background-color: var(--brand2);
    border: none;
    width: 250px;
    padding: 10px;
    border-radius: 4px;
  }

  .bodyContainer {
    padding: 0px 20px;
    gap: 100px;
  }

  @media screen and (min-width: 768px) {
    .bodyContainer {
      display: flex;
      flex-direction: row-reverse;
      justify-content: start;
    }

    .openFilter {
      display: none;
    }

    .cardContainer {
      display: flex;
      gap: 20px;
    }
  }
`;

export const StyledBackgroundImg = styled.div`
  padding-top: 80px;
  width: 100vw;
  height: fit-content;
  max-height: 350px;
  background-image: linear-gradient(0deg, var(--grey0) 20%, var(--grey10) 100%);
  opacity: 0.7;
  position: relative;
  max-height: 400px;
  object-fit: cover;
  overflow: hidden;

  .textBackgroundImg {
    z-index: 1;
    width: 80%;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--whiteFixed);
  }
  .coverTitle {
    font: var(--Heading-6-500);
  }

  & > img {
    padding-top: 30px;
    max-height: 400px;
  }
`;

export const StyledCarsContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  gap: 50px;
  height: fit-content;
  margin: 50px 0;

  .no-advertisements-warning {
    color: var(--grey4);
    font: var(--Heading-3-600);
    width: 70vw;
    position: relative;
  }

  @media screen and (min-width: 768px) {
    overflow-x: unset;
    flex-wrap: wrap;
    .no-advertisements-warning {
      color: var(--grey4);
      font: var(--Heading-3-600);
      width: 70vw;
      position: relative;
      right: 120px;
    }
  }
`;
