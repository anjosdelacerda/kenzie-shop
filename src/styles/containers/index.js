import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  width: 100vw;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
