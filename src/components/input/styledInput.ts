import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 466px;
  gap: 6px;

  input {
    height: 45px;
    border-radius: 4px;
    border: solid 2px var(--grey6);
    padding: 5px 15px;
    font: var(--body-1-400);
    color: var(--grey1);
    width: 100%;
  }

  label {
    color: var(--grey1);
    font: var(--body-2-500);
    width: max-content;
  }

  input:focus,
  input:hover {
    border-color: var(--brand2);
    background-color: var(--grey8);
  }
`;

export const StyledTextarea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  textarea {
    border-radius: 4px;
    border: solid 2px var(--grey6);
    padding: 10px;
    color: var(--grey1);
    font: var(--body-1-400);
    min-width: 100%;
    max-width: 100%;
    min-height: 120px;
    max-height: 120px;
  }

  label {
    color: var(--grey1);
    font: var(--body-2-500);
  }

  textarea:hover,
  textarea:focus {
    border-color: var(--brand2);
    justify-content: center;
    background-color: var(--grey7);
  }

  p {
    position: absolute;
    bottom: 10px;
    color: var(--grey1);
    top: 69%;
    right: 50%;
  }

  @media (min-width: 768px) {
    p {
      position: absolute;
      bottom: 10px;
      color: var(--grey1);
      top: 69%;
      left: 15px;
    }
  }
`;

export const StyledSelect = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: var(--grey1);
    font: var(--body-2-500);
  }

  select {
    height: 50px;
    font: var(--body-1-400);
    color: var(--grey1);
    padding: 10px;
    border-radius: 4px;
    border: solid 2px var(--grey6);
    background-color: var(--grey10);
    cursor: pointer;

    :hover,
    :focus {
      border-color: var(--brand2);
      justify-content: center;
    }

    & > option {
      font: var(--body-1-400);
      color: var(--grey1);
    }
  }
`;
