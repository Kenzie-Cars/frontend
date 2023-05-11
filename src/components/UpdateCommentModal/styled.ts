import styled from "styled-components";

export const UpdateCommentStyled = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgb(0, 0, 0, 0.3);
  align-items: center;
  justify-content: center;
  z-index: 40;
  display: flex;

  &.modalOff {
    display: none;
  }

  .container {
    padding: 30px 0px;
    width: 90%;
    max-width: 600px;
    background-color: var(--grey8);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 32px;

    form {
      width: 90%;
      max-width: 500px;
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 16px;

      .buttons {
        display: flex;
        gap: 32px;
        width: 100%;
      }
    }
  }
`;
