import styled from "styled-components";

export const FooterStyle = styled.footer`
  position: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 260px;
  width: 100vw;
  background-color: var(--grey0);
  bottom: 0;

  img {
    width: 153px;
    height: 26px;
  }

  p {
    max-width: 265px;
    font: var(--body-2-400);
    color: var(--whiteFixed);
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    background-color: var(--grey1);
    color: var(--whiteFixed);
    border-radius: 4px;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 120px;
  }
`;
