import styled, { css } from "styled-components";

interface IColor {
  background?: string;
}

export const AdvertiseContainer = styled.div<IColor>`
  background-color: var(--grey7);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;

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
    height: 420px;
    background-color: ${(props) => {
      return `var(--random${props.background})`;
    }};
    position: absolute;
  }
  .container {
    z-index: 1;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 500px;
  }

  .imgContainer {
    display: flex;
    justify-content: center;
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
    a {
      text-align: center;
      margin-top: 30px;
      color: var(--whiteFixed);
      font: var(--button-medium-text);
      padding: 12px 20px;
      border: none;
      border-radius: 4px;
      background-color: var(--brand1);
      width: 100px;
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
        background-color: ${(props) => {
          return `var(--random${props.background})`;
        }};

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
      padding: 20px 10px;
      color: var(--whiteFixed);
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      width: 100%;
      text-align: center;
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
      position: relative;
      margin-top: 10px;
    }

    .comments-list li {
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 6px;
      margin-bottom: 32px;
    }

    .commentButton {
      position: absolute;
      right: 10px;
      top: 15px;
      display: flex;
      gap: 16px;

      .icons {
        font-size: 18px;
        color: var(--grey2);

        &:hover {
          transform: scale(1.2);
          color: var(--brand2);
        }
      }
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
      /* background-color: var(--brand2); */

      /* ${({ background }) => {
        return css`
        background-color: var(--random${background});
        `
  }} */
      padding: 4px;
      color: var(--whiteFixed);
      border-radius: 50%;
      height: 40px;
      width: 40px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;
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
    position: relative;
    gap: 10px;

    textarea {
      height: fit-content;
      min-height: 120px;
      max-width: 630px;
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
      position: absolute;
      top: 24%;
      right: 2%;
    }
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
    span:active {
      background-color: var(--brand1);
      color: var(--whiteFixed);
    }
  }

  @media (min-width: 768px) {
    .carAdvertiseInfo {
      .carInfo {
        display: flex;
        flex-direction: row;
        div {
          margin: 30px auto;
          display: flex;
          gap: 10px;
          font: var(--body-2-500);
          width: 50%;
          p {
            padding: 4px 8px;
            border-radius: 4px;
            color: var(--brand1);
            background-color: var(--brand4);
          }
        }
        h3 {
          font: var(--Heading-7-500);
          width: 50%;
          text-align: end;
          align-self: center;
        }
      }
      a {
        margin-top: 0;
      }
    }
    .container {
      display: grid;
      width: 95%;
      max-width: 1200px;
      grid-template-columns: 5fr 3fr;
      column-gap: 25px;
      position: relative;
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
      margin-top: 40px;
      height: 350px;
    }

    .advertiserInfo {
      grid-column: 2;
      grid-row: 2;
      position: absolute;

      & > a {
        padding: 20px 0px;
      }
    }

    .comments {
      grid-column: 1;
    }

    .carAdvertiseInfo,
    .carDescription,
    .newComment {
      grid-column: 1;

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
        position: absolute;
        top: 32%;
        right: 2%;
      }
    }
  }
`;
