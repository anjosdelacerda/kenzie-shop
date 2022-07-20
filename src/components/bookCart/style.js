import styled from "styled-components";

export const Item = styled.li`
  display: flex;

  width: 19rem;
  height: 3rem;

  border-radius: 6px;

  margin: 1rem;

  justify-content: space-between;
  align-items: center;

  h3 {
    font-size: 12px;
    font-weight: bold;
    color: var(--rosaTerroso);
  }
`;

export const ImgIcon = styled.div`
  width: 2.95rem;
  height: 2.95rem;

  img {
    width: 99%;
    height: 99%;
  }
`;
