import styled from "styled-components";

export const FormRegisterAdvertiseStyle = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 90%;
  height: max-content;
  max-height: 750px;
  padding-top: 15px;
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
    position: fixed;
    top: 100px;
    color: var(--grey0);
    font: var(--body-2-500);
  }

  & > .inputContainer {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  & > button {
    margin: 1rem 0;
  }
`;

export const ButtonContainerStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;

  & > button {
    margin: 0;
  }
`;
