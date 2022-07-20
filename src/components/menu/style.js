import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  width: 100vw;
  height: 4.5rem;
  background-color: var(--greenMenu);

  align-items: center;
  justify-content: space-between;

  h1 {
    color: var(--rosaTerroso);
    font-weight: bold;

    margin-left: 1rem;

    span {
      color: var(--backCard);
    }
  }

  @media (max-width: 650px) {
    justify-content: center;

    span {
      margin: 0 9px;
    }
  }
`;

export const Icon = styled.div`
  display: flex;

  width: 5rem;
  height: 4.5rem;

  margin-right: 1rem;
`;
