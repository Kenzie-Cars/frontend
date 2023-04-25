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
    /* max-width: fit-content; */
  }

  input:hover,
  :focus {
    border-color: var(--brand2);
  }
`;

export const StyledTextarea = styled.div`
  /* height: 200px; */
  /* width: 80%; */
  width: 100%;

  /* background-color: brown; */
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;

  textarea {
    /* height : 150px; */
    max-width: 100%;
    border-radius: 4px;
    border: solid 2px var(--grey6);
    padding: 10px;
    color: var(--grey1);
    font: var(--body-1-400);
  }

  label {
    color: var(--grey1);
    font: var(--body-2-500);
  }

  :hover,
  :focus {
    border-color: var(--brand2);
  }

  p {
    position: absolute;
    bottom: 10px;
    right: 10px;
    color: var(--grey1);
  }
`;

// export const StyledSelect = styled.div`
//   width: 80%;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 8px;

//   label {
//     color: var(--grey1);
//     font: var(--body-2-500);
//   }

//   .select {
//     display: flex;
//     flex-direction: column;
//     position: relative;

//     input {
//       height: 50px;
//       padding: 10px;
//       border-radius: 4px;
//       border: 2px solid var(--grey6);
//       font: var(--body-1-400);
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 100%;
//       outline: none;
//       cursor: pointer;
//     }

//     .options {
//       position: absolute;
//       top: 70px;
//       width: 100%;
//       /* background-color: brown; */
//       overflow: hidden;
//       display: none;
//       z-index: 5;
//       background-color: var(--grey10);

//       div {
//         font: var(--body-1-400);
//         padding: 10px;
//         border-radius: 4px;
//       }

//       div:hover {
//         background-color: var(--brand1);
//         color: var(--grey8);
//       }

//       &.dropdownOn {
//         display: block;
//       }
//     }

//     &::before {
//       content: "";
//       position: absolute;
//       right: 20px;
//       top: 15px;
//       z-index: 5;
//       width: 8px;
//       height: 8px;
//       border: solid 2px var(--grey1);
//       border-top: 2px solid var(--grey10);
//       border-right: 2px solid var(--grey10);
//       transform: rotate(-45deg);
//       transition: 0.5s;
//       pointer-events: none;
//     }

//     &.dropdownOn::before {
//       top: 25px;
//       transform: rotate(-225deg);
//     }
//   }

//   select {
//     height: 50px;
//     font: var(--body-1-400);
//     padding: 10px;
//     border-radius: 4px;
//     border: solid 2px var(--grey6);
//   }

//   select:hover {
//     border-color: var(--brand2);
//   }
// `;

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
    }

    & > option {
      font: var(--body-1-400);
      color: var(--grey1);
    }
  }
`;
