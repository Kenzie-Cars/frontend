import styled from "styled-components";

export const AdvertiseContainer = styled.div`
  background-color: var(--grey7);
  display: flex;
  align-items: center;
  flex-direction: column;
  .default {
    margin-top: 1rem;
    border-radius: 4px;
    height: fit-content;
    padding: 30px 28px;
    width: 95%;
    background-color: var(--grey10);
    display: flex;
    flex-direction: column;
  }
  .background {
    width: 100vw;
    height: 370px;
    background-color: var(--brand1);
    display: flex;

    .imgContainer {
      display: flex;
      justify-content: center;
      width: 95%;
      height: 80%;
      margin: auto;
      border-radius: 4px;
      padding: 30px 5px;
      background-color: var(--grey10);
      img {
        width: 90%;
        max-width: 265px;
        max-height: 235px;
      }
    }
  }
  .carAdvertiseInfo {
    margin-top: -1rem;
    h3 {
      font: var(--Heading-6-600);
    }
    .carInfo {
      div {
        margin: 30px auto;
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
      h3 {
        font: var(--Heading-7-500);
      }
    }
    button {
      margin-top: 30px;
      color: var(--whiteFixed);
      font: var(--button-medium-text);
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      background-color: var(--brand1);
    }
  }
  .carDescription {
    h3 {
      font: var(--Heading-6-600);
      margin-bottom: 1.5rem;
    }
    p {
      font: var(--body-1-400);
      color: var(--grey2);
      text-align: justify;
    }
  }
  .carGallery {
    ul {
      margin-top: 2rem;
      display: grid;
      gap: 10px;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      li {
        display: flex;
        padding: 10px;
        background-color: var(--grey7);
        img {
          object-fit: contain;
        }
      }
    }
  }
  .advertiserInfo {
    .info {
      margin-bottom: 2rem;
      gap: 1.5rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 2rem;
        margin: 0 auto;
        background-color: var(--brand2);
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--whiteFixed);
        border-radius: 50%;
        height: 80px;
        width: 80px;
        text-align: center;
      }
      h3 {
        font: var(--Heading-6-600);
      }
    }
    p {
      text-align: justify;
      line-height: 28px;
      color: var(--grey2);
    }
    button {
      margin: 20px 0 10px 0;
      background-color: var(--grey0);
      border-radius: 4px;
      border: none;
      padding: 20px;
      color: var(--whiteFixed);
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
    }
  }
  .newComment {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;
    .userInfo {
      display: flex;
      gap: 5px;
      align-items: center;
      margin-bottom: 1rem;
      p {
        background-color: var(--brand2);
        padding: 4px;
        color: var(--whiteFixed);
        border-radius: 50%;
        height: 30px;
        width: 30px;
        text-align: center;
      }
      h3 {
        font: var(--body-2-500);
      }
    }
    textarea {
      height: fit-content;
      min-height: 120px;
      border: 1px solid var(--grey7);
      border-radius: 4px;
    }
    button {
      margin: 30px 0;
      width: fit-content;
      color: var(--whiteFixed);
      font: var(--button-medium-text);
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      background-color: var(--brand1);
    }
    .fastComment {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
      span {
        font: var(--body-2-500);
        border-radius: 24px;
        background-color: var(--grey7);
        padding: 4px 10px;
        color: var(--grey3);
      }
    }
  }
`;
