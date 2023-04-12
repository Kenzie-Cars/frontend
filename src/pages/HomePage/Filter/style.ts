import styled from "styled-components";

export const StyledFilter = styled.div`
  position: absolute;
  background-color: var(--whiteFixed);
  top: 0;
  width: 100vw;
  padding: 1rem;
  .filterHeader {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    font: var(--Heading-7-500);
    .close {
      width: fit-content;
      height: fit-content;
      background-color: unset;
      color: var(--grey4);
    }
  }
  .filterList {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: left;
    text-align-last: start;
    h3 {
      font: var(--Heading-4-600);
    }
    .lists {
      margin: 20px 10px;
      li {
        cursor: pointer;
        font: var(--Heading-7-500);
        color: var(--grey4);
      }
    }
  }
  .range {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    h3 {
        margin-left: 1rem;
      align-self: flex-start;
      font: var(--Heading-4-600);
    }
    .inputs {
      display: flex;
      justify-content: space-around;
      gap: 1rem;
      input {
        padding: 1px 20px;
        margin-bottom: 1rem;
        border: none;
        border-radius: 4px;
        background-color: var(--grey6);
        width: 140px;
        height: 35px;
        &::placeholder {
          font: var(--Heading-7-500);
          color: var(--grey4);
        }
      }
    }
  }
`;
