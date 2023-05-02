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
    /* width: 95%; */
    background-color: var(--grey10);
    display: flex;
    flex-direction: column;
  }
  .background {
    width: 100vw;
    /* height: 65%; */
    height: 420px;
    background-color: var(--brand1);
    position: absolute;
  }
  .container {
    z-index: 1;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    width: 90%;
    /* align-items: center; */
    max-width: 500px;
  }

  .imgContainer {
    display: flex;
    justify-content: center;
    /* width: 95%; */
    height: 80%;
    max-height: 270px;
    margin: 45px 0 30px 0;
    border-radius: 4px;
    padding: 30px 5px;
    background-color: var(--grey10);
    img {
      width: 90%;
      max-width: 350px;
      max-height: 235px;
      align-self: center;
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
    a {
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
  .comments {
    h3 {
      font: var(--Heading-6-600);
      margin-bottom: 1rem;
    }
    .commentBody {
      margin-bottom: 1.5rem;
      text-align: justify;
      font: var(--body-2-400);
      color: var(--grey2);
    }
  }
  .userInfo {
    display: flex;
    width: fit-content;
    gap: 5px;
    align-items: baseline;
    margin-bottom: 1rem;
    height: 20px;
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
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      color: var(--grey3);
    }
  }
  .newComment {
    display: flex;
    flex-direction: column;
    margin-bottom: 2.5rem;

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
        cursor: pointer;
        font: var(--body-2-500);
        border-radius: 24px;
        background-color: var(--grey7);
        padding: 4px 10px;
        color: var(--grey3);
      }
    }
  }

  @media screen and (min-width: 768px) {
    .container {
      display: grid;
      width: 95%;
      max-width: 1200px;
      grid-template-columns: 5fr 3fr;
      column-gap: 25px;
      position: relative;
      /* background-color: red; */
    }
    .background {
      height: 600px;
    }

    .imgContainer {
      height: 350px;
      max-height: 350px;
      margin-top: 40px;
    }

    .carGallery {
      grid-column: 2;
      grid-row: 1;
      /* align-self: center; */
      margin-top: 40px;
      height: 350px;
    }

    .advertiserInfo {
      grid-column: 2;
      grid-row: 2;
      position: absolute;
    }

    .comments {
      grid-column: 1;
    }

    .carAdvertiseInfo,
    .carDescription,
    .newComment {
      grid-column: 1;
    }
  }
`;
