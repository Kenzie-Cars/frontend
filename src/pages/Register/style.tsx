import styled from "styled-components";

export const PageRegisterStyled = styled.main`
  /* width: 100%; */
  display: flex;
  background-color: var(--grey7);
  justify-content: center;
  align-items: center;

  .container {
    margin: 40px 0px 0px 0px;
    padding-top: 50px;
    height: 80vh;
    width: 100%;
    background-color: var(--grey7);

    /* min-height: 500px; */
    max-width: 450px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-height: 800px) {
      margin: 100px 0px 60px 0px;
    }
  }

  form {
    /* border: 2px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    background-color: var(--grey10);
    width: 90%;
    height: 80%;
    overflow-y: auto;
    min-height: 500px;
    gap: 24px;
    justify-content: initial;
    padding: 0px 5%;

    .input {
      width: 100%;
    }

    h1 {
      font: var(--Heading-5-500);
      align-self: baseline;
      padding: 5% 0 0 10%;
    }
    .info {
      font: var(--body-2-500);
      align-self: baseline;
      padding-left: 10%;
    }

    .div--buttons {
      width: 90%;
      display: flex;
      gap: 1;
    }
    .div--buttonSubmit {
      width: 90%;
      display: flex;
      gap: 1;
      padding-bottom: 10px;
    }

    .esqueci {
      /* align-self: flex-end; */
      margin: -16px 32px 0px auto;
      color: var(--grey2);
      font-weight: 500;
    }

    .text2 {
      align-self: center;
      color: var(--grey3);
    }

    p:hover {
      color: var(--brand2);
    }
  }
`;
