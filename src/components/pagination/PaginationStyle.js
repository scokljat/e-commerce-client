import styled from "styled-components";

export const PaginationContainer = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;

  li {
    cursor: pointer;

    &.active {
      color: #f0408d;
    }
  }
`;
