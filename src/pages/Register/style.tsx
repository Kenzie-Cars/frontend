import styled from "styled-components";

export const PageRegisterStyled = styled.main`
  display: flex;
  background-color: var(--grey7);
  justify-content: center;

  .container {
    margin: 40px 0px 0px 0px;
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
    margin: 100px 0px;
    border-radius: 8px;
    background-color: var(--grey10);
    width: 90%;
    min-height: 500px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    padding: 40px 5%;

    .input {
      width: 100%;
    }

    h1 {
      font-size: 32px;
    }

    .text2 {
      align-self: center;
      color: var(--grey3);
    }

    p {
      color: var(--brand2);
      font-size: 1rem;
      font-weight: 600;
    }

    .div--buttons {
      width: 100%;
      display: flex;
      justify-content: center;
      gap: 24px;
    }

    @media (max-height: 800px) {
      margin: 0;
    }
  }
`;
