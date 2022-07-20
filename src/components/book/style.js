import styled from "styled-components";

export const Card = styled.li`
  display: flex;
  /* flex-direction: column; */
  flex-direction: ${(props) => (props.isRemove ? "block" : "column")};

  /* width: 16rem; */

  width: ${(props) => (props.isRemove ? "99.1%;" : "16rem")};

  /* height: 28.5rem; */

  height: ${(props) => (props.isRemove ? "1rem;" : "28.5rem")};

  border: 1px solid transparent;

  background: var(--backCard);
  margin: 1rem;

  border-radius: 2px;

  -webkit-box-shadow: 5px 5px 15px 5px #fffaf2;
  box-shadow: 5px 5px 15px 5px #fffaf2;
  h3 {
    color: var(--rosaTerroso);
  }
`;

export const ImgCard = styled.div`
  /* width: 16rem; */

  width: ${(props) => (props.isRemove ? "99.1%;" : "16rem")};
  /* height: 16rem; */
  height: ${(props) => (props.isRemove ? "99.1%;" : "16rem")};
  img {
    width: 99.4%;
    height: 100%;

    border-radius: 4px;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  /* flex-direction: column; */
  flex-direction: ${(props) => (props.isRemove ? "block;" : "column")};

  justify-content: space-evenly;

  padding: 5px 5px;

  /* width: 16rem; */

  width: ${(props) => (props.isRemove ? "5rem;" : "16rem")};
  height: 10.75rem;
`;

export const ButtonBook = styled.button`
  display: flex;

  /* width: 5rem; */
  width: ${(props) => (props.isRemove ? "1rem;" : "5rem")};
  /* height: 2rem; */
  height: ${(props) => (props.isRemove ? "1 rem;" : "2rem")};

  background: var(--greenMenu);
  border-radius: 7px;
  color: var(--backCard);

  align-items: center;
  justify-content: center;
`;
