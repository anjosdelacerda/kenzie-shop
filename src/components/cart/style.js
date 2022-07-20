import styled from "styled-components";

export const BoxCart = styled.div`
  display: flex;
  flex-direction: column;

  width: 22.8rem;
  height: 41rem;

  border-radius: 5px;

  margin-top: 1rem;

  h3 {
    font-weight: bold;
    font-size: 1.1rem;
    color: var(--grayFont);
  }

  span {
    color: var(--spanColor);
    font-size: 10px;
  }

  @media (max-width: 650px) {
    width: 95vw;

    z-index: 10;
    /* margin-right: 50%;
    margin-left: translateX(-50%); */
  }
`;

export const TopBoxCart = styled.div`
  display: flex;

  width: 99.1%;
  height: 3rem;
  padding: 6px;

  background: var(--greenMenu);
  color: var(--backCard);
  border-radius: 5px;

  align-items: center;
  div {
    h5 {
      font-weight: bold;
      font-size: 0.8rem;
    }
  }
`;

export const BottomBoxCart = styled.div`
  display: flex;
  flex-direction: column;
  width: 99.1%;
  height: 99%;
  height: 6rem;

  justify-content: center;
  align-items: center;

  padding: 1.25rem 0.62rem;
  gap: 1.31rem;

  align-items: center;
  justify-content: space-evenly;
`;

export const CartList = styled.ul`
  display: flex;
  flex-direction: column;

  scroll-behavior: auto;

  width: 99%;
  height: 99%;
`;
