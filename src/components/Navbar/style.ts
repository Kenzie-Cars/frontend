import styled from "styled-components";

interface IHeaderProps {
  is_active: boolean;
}

interface INavbarProps {
  is_active: boolean;
  is_token: string | null;
}

interface IUlProps {
  is_open: boolean;
}

export const HeaderStyle = styled.header<IHeaderProps>`
  position: fixed;
  display: flex;
  flex-direction: column;
  height: 80px;
  width: 100vw;
  max-width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: var(--grey10);
  border-bottom: ${(props) =>
    props.is_active ? "solid 2px var(--grey6)" : "solid 2px transparent"};
  z-index: 100;

  & > div {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    height: 80px;
    width: 100%;

    & > img {
      cursor: pointer;
    }
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

export const NavbarStyle = styled.nav<INavbarProps>`
  display: ${(props) => (props.is_active ? "none" : "flex")};
  flex-direction: ${(props) => (props.is_token ? "row-reverse" : "column")};
  height: 184px;
  width: 100vw;
  max-width: 100%;
  margin-top: 78px;
  padding: 15px 0;
  background-color: var(--grey10);
  border-bottom: solid 2px var(--grey6);
  gap: 1rem;

  & > :nth-child(1) {
    font: var(--body-1-600);
    padding-left: 18px;
    min-width: 108px;
    width: 131px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    .link1 {
      display: flex;
      justify-content: center;
      align-items: center;
      width: inherit;
      height: inherit;
      color: var(--brand2);
    }
  }

  .logged {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: fit-content;
    padding-right: 18px;
    cursor: pointer;

    & > p {
      color: var(--grey2);
      font: var(--body-1-400);
    }
  }

  .acronym {
    background-color: var(--brand2);
    padding: 10px;
    border-radius: 200px;

    & > p {
      color: var(--grey10);
      width: max-content;
      font: 700 14px "Inter";
    }
  }

  @media (min-width: 425px) {
    display: ${(props) => (props.is_active ? "none" : "flex")};
    flex-direction: ${(props) => (props.is_token ? "row-reverse" : "row")};
    justify-content: space-between;
    align-items: center;
    padding-right: ${(props) => (props.is_token ? "0" : "18px")};
  }

  @media (min-width: 768px) {
    position: fixed;
    right: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 0;
    height: 79px;
    width: fit-content;
    border-bottom: solid 1px var(--grey6);
    border-left: solid 2px var(--grey6);
    padding: 0 30px;
    gap: 2rem;

    & > :nth-child(1) {
      cursor: pointer;
    }

    .logged {
      cursor: pointer;
    }
  }
`;

export const LinkStyle = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 90%;
  max-width: 333px;
  margin: 0 auto;
  border: 1.5px solid var(--grey4);
  border-radius: 4px;
  background-color: var(--whiteFixed);
  text-decoration: none;
  font: var(--button-medium-text);

  .link {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--grey0);
    width: inherit;
    height: inherit;
  }

  @media (min-width: 425px) {
    width: 133px;
    margin: 0;

    @media (min-width: 768px) {
      :hover {
        background-color: var(--grey7);
        cursor: pointer;
      }
    }
  }
`;

export const UlStyle = styled.ul<IUlProps>`
  position: fixed;
  display: ${(props) => (props.is_open ? "flex" : "none")};
  flex-direction: column;
  top: 145px;
  width: max-content;
  border-left: solid 2px var(--grey6);
  border-bottom: solid 2px var(--grey6);
  background-color: var(--grey10);
  z-index: 100;

  & > li {
    display: flex;
    align-items: center;
    padding: 15px 30px;
    color: var(--grey2);
    font: var(--body-1-400);
    cursor: pointer;
  }

  @media (min-width: 768px) {
    top: 75px;

    & > li {
      width: 248px;
      cursor: pointer;

      :hover {
        background-color: var(--grey7);
      }
    }
  }
`;
