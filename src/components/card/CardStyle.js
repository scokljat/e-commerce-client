import { ReactComponent as Plus } from "../../assets/images/bx-plus-circle.svg";
import { ReactComponent as Minus } from "../../assets/images/bx-minus-circle.svg";
import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 34.3rem;
  align-self: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const ItemDescription = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.93rem;
`;

export const Overlay = styled.div`
  height: 4.6rem;
  z-index: 1;
  background: rgb(255, 255, 255, 0.9);
  position: relative;
  bottom: 7.9rem;
  opacity: 0;

  :hover {
    opacity: 1;
  }

  svg {
    fill: #000;
    cursor: pointer;
  }
`;

export const OverlayContainer = styled.div`
  display: flex;
  justify-content: ${({ isMyShop }) =>
    isMyShop ? "space-between" : "flex-end"};
  align-items: center;
  height: 100%;
  padding: 0rem 1.2rem;
`;

export const QuantitiyContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InnerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;

  p {
    font-size: 1.5rem;
    font-weight: 600;
    margin: 0rem;
    color: #f0408d;
  }
`;

export const StyledPlus = styled(Plus)`
  :hover {
    stroke: #f0408d;
    fill: #f0408d;
  }
`;

export const StyledMinus = styled(Minus)`
  :hover {
    stroke: #f0408d;
    fill: #f0408d;
  }
`;
