import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 550px;
  align-self: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
`;

export const Overlay = styled.div`
  height: 80px;
  z-index: 1;
  background: rgb(255, 255, 255, 0.9);
  position: relative;
  bottom: 127px;
  opacity: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;

  :hover {
    opacity: 1;
  }

  svg {
    fill: #000;
    cursor: pointer;
  }
`;
