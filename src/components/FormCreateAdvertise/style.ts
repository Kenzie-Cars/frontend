import styled from "styled-components";

export const FormRegisterAdvertiseStyle = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 90%;
  height: max-content;
  max-height: 750px;
  padding-top: 30px;
  overflow-y: auto;
  gap: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--grey5);
    border-radius: 4px;
  }

  & > h3 {
    top: 100px;
    color: var(--grey0);
    font: var(--body-2-500);
  }

  & > .inputContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;
  }

  & > .selectContainer {
    display: flex;
    justify-content: space-between;
    width: 48%;
    gap: 1rem;

    & > select {
      width: 50%;
    }
  }

  & > button {
    margin: 1rem 0 0 0;
  }

  .div--buttons {
    & > h3 {
      margin-bottom: 5px;
      font: var(--body-2-500);
    }
  }
`;

export const ButtonContainerStyle = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  gap: 1rem;
  margin-top: 1rem;

  & > button {
    margin: 0;
  }
`;
