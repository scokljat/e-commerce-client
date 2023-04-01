import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 200px;
  top: 10vh;
  left: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 10px 20px;
    cursor: pointer;
  }

  li:hover {
    color: #f0408d;
  }
`;
