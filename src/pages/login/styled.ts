import styled from "styled-components";

export const PageLoginStyled = styled.main`
  display: flex;
  background-color: var(--grey7);
  justify-content: center;

  .container {
    margin: 40px 0px 0px 0px;
    height: 80vh;
    width: 100%;
    background-color: var(--grey7);
    max-width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-height: 800px) {
      margin: 100px 0px 60px 0px;
    }
  }

  form {
    border-radius: 8px;
    background-color: var(--grey10);
    width: 90%;
    height: 75%;
    min-height: 450px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    padding: 0px 5%;

    .input {
      width: 100%;
    }

    h1 {
      font-size: 32px;
    }

    .esqueci {
      margin: -16px 32px 0px auto;
      color: var(--grey2);
      font-weight: 500;
    }

    .text2 {
      align-self: center;
      color: var(--grey3);
    }

    span {
      text-align: center;
      cursor: pointer;
    }

    span:hover {
      color: var(--brand2);
    }

    p:hover {
      color: var(--brand2);
    }
  }
  @media (max-height: 800px) {
    form {
      border-radius: 8px;
      background-color: var(--grey10);
      width: 90%;
      height: 75%;
      min-height: 478px;
      display: flex;
      flex-direction: column;
      gap: 24px;
      -webkit-box-pack: center;
      justify-content: center;
      padding: 0px 5%;
      margin-top: 38px;

      .showPassDiv {
        position: relative;
        > button {
          position: absolute;
          top: 52%;
          right: 2%;
          border: none;
          height: 20px;
          padding: inherit;
        }
      }
    }
  }
`;
