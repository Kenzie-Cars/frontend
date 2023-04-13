import styled from "styled-components";

interface IProps {
  is_active: boolean;
}

export const HeaderStyle = styled.header<IProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100vw;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey10);
  border-bottom: ${(props) =>
    props.is_active ? "solid 2px var(--grey6)" : "solid 2px transparent"};

  & > div {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    height: 80px;
    width: 100%;
  }

  & > svg {
    position: absolute;
    z-index: 4;
    top: 30px;
    right: 16px;
  }

  .close {
    display: none;
  }

  .open {
    display: flex;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    max-width: 100%;
    border-bottom: solid 2px var(--grey6);
    padding-left: 30px;

    & > div > svg {
      color: transparent;
    }
  }
`;

export const NavbarStyle = styled.nav<IProps>`
  display: ${(props) => (props.is_active ? "none" : "flex")};
  flex-direction: column;
  height: 184px;
  width: 100vw;
  max-width: 100%;
  margin-top: 85px;
  padding: 15px 0;
  border-bottom: solid 2px var(--grey6);
  gap: 1rem;

  & > p {
    font: var(--body-1-600);
    color: var(--grey2);
    padding-left: 18px;
    min-width: 108px;
  }

  @media (min-width: 425px) {
    display: ${(props) => (props.is_active ? "none" : "flex")};
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 18px;
  }

  @media (min-width: 768px) {
    position: fixed;
    right: 0;
    display: flex;
    flex-direction: row;
    margin-top: 0;
    height: 80px;
    width: fit-content;
    border-bottom: none;
    border-left: solid 2px var(--grey6);
    padding: 0 30px;
    gap: 2rem;
  }
`;

export const ButtonStyle = styled.button`
  height: 48px;
  width: 90%;
  max-width: 333px;
  margin: 0 auto;
  border: 1.5px solid var(--grey4);
  border-radius: 4px;
  background-color: var(--whiteFixed);

  @media (min-width: 425px) {
    width: 133px;
    margin: 0;
  }
`;
