import styled from "styled-components";

export const FormUpdate = styled.form`
  width: 90%;
  margin: 0 auto;

  & > .inputContainer {
    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 1rem;

    & > select {
      width: 50%;
    }
  }
`;
