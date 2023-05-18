import styled from "styled-components";

export const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Content = styled.div`
  background: #fff;
  margin: auto;
  border-radius: 0.5rem;
  cursor: default;
  width: 30%;
  height: 30%;

  @media (max-width: 980px) {
    height: 25%;
  }

  @media (max-width: 800px) {
    width: 40%;
  }

  @media (max-width: 550px) {
    width: 50%;
  }

  @media (max-width: 420px) {
    width: 70%;
  }
`;
