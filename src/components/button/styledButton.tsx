import styled, { css } from "styled-components";
import { IButtonStyled } from "../../interfaces/components";

const typeHover: any = {
  hover1: {
    background: "transparent",
    border: "2px solid var(--brand1)",
    color: "var(--brand1)",
  },
  hover2: {
    background: "var(--brand4)",
    border: "2px solid var(--brand1)",
    color: "var(--brand1)",
  },
  hover3: {
    background: "transparent",
    border: "none",
    color: "var(--grey0)",
  },
  hover4: {
    background: "transparent",
    border: "2px solid var(--grey7)",
    color: "var(--grey0)",
  },
  hover5: {
    background: "var(--grey6)",
    border: "none",
    color: "var(--grey2)",
  },
  hover6: {
    background: "var(--grey5)",
    border: "none",
    color: "var(--grey2)",
  },
  hover7: {
    background: "transparent",
    border: "2px solid var(--grey2)",
    color: "var(--grey2)",
  },
  hover8: {
    background: "var(--grey1)",
    border: "none",
    color: "var(--grey10)",
  },
  hover9: {
    background: "var(--alert1)",
    border: "none",
    color: "var(--alert2)",
  },
};

const StyledButton = styled.button`
  background-color: var(--brand1);
  color: var(--whiteFixed);
  font-size: 1rem;
  font-weight: 600;
  border-radius: 4px;
  border: none;

  ${({ background }: IButtonStyled) => {
    return css`
      background-color: var(--${background});
    `;
  }}

  ${({ hover }: IButtonStyled) => {
    return css`
      &:hover {
        ${typeHover[`${hover}`]}
      }
    `;
  }}

    ${({ border }) => {
    if (border) {
      return css`
        border: ${border};
      `;
    }
  }}

${({ color }) => {
    if (color) {
      return css`
        color: var(--${color});
      `;
    }
  }}

${({ is_active }: IButtonStyled) => {
    return css`
      &:active {
        background-color: var(--${is_active});
        color: var(--grey7)
        transition: 5000s
      }
    `;
  }}

${({ padding }) => {
    if (padding) {
      return css`
        padding: "${padding}px";
      `;
    }
  }}

    

    ${({ size }: IButtonStyled) => {
    switch (size) {
      case "1":
        return css`
          height: 40px;
          width: 100px;
        `;
      case "2":
        return css`
          height: 40px;
          width: 130px;
        `;
      case "3":
        return css`
          height: 50px;
          width: 140px;
        `;
      case "4":
        return css`
          height: 50px;
          width: 200px;
        `;
      case "5":
        return css`
          min-height: 50px;
          width: 80%;
        `;
      case "6":
        return css`
          min-height: 50px;
          width: 100%;
        `;
      case "7":
        return css`
          min-height: 50px;
          width: 152px;
        `;
    }
  }}
`;

export default StyledButton;
