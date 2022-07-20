import styled from "styled-components";

export const Lista = styled.ul`
  display: flex;
  flex-wrap: wrap;

  width: 56.3rem;
  height: 45.968rem;

  @media (max-width: 650px) {
    display: flex;
    flex-wrap: nowrap;
    width: 100vw;
    overflow: scroll;
  }
`;
