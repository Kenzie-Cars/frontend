import styled, { css } from "styled-components";

export const StyledFilter = styled.div`
  position: absolute;
  background-color: var(--whiteFixed);
  top: 55px;
  width: 100vw;
  max-width: 400px;
  padding: 1rem;
  


  .filterHeader {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    z-index: 100;
    font: var(--Heading-7-500);
    
    .close {
      width: fit-content;
      height: fit-content;
      background-color: unset;
      color: var(--grey4);
    }
  }

  

  .filterList {
    /* padding: 1rem; */
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align-last: start;
    /* background-color: aqua; */

    h3 {
      font: var(--Heading-4-600);
    }
    .lists {
      margin: 20px 10px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      max-height: 600px;
      overflow-y: auto;

      li {
        cursor: pointer;
        font: var(--Heading-7-500);
        color: var(--grey4);
        display: flex;
        justify-content: start;
        text-align: start;
      }
      
      ${({ brand, model, color, year, fuel }): any => {
    return css`
          #${brand}{
            color: var(--brand2);
          }
          #${model}{
            color: var(--brand2);
          }
          #${color}{
            color: var(--brand2);
          }
          #${`year${year}`}{
            color: var(--brand2);
          }
          #${fuel}{
            color: var(--brand2);
          }
        `
  }}

    }
  }
  .range {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* background-color: aqua; */
    width: 300px;
    h3 {
      /* margin-left: 1rem; */
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

  button {
    margin-bottom: 10px;
  }

  @media screen and (min-width: 768px) {
    background-color: var(--whiteFixed);
    position: inherit;
    width: 300px;
    padding: 1rem;
      .filterModal {
        display: none;
      }
      
  .filterHeader {
      /* display:none */
  }
  }

  @media (max-width: 768px) {
    /* width: 100vw; */
    max-width: 100vw;
    height: 100vh;
    
    top: 80px;
    /* bottom: -20px; */
    left: 0px;
    z-index: 20;
    /* background-color: bisque; */
    /* margin-bottom: 300px; */
    overflow-y: auto;
    position: fixed;
    padding: 20px 15px 90px 15px;

    .filterButtons {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    ${({ statusFilter }: { statusFilter: boolean }) => {
    if (statusFilter) {
      return css` display: none;`
    }
  }}
  }
`;
