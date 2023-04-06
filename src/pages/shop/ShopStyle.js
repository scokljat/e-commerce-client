import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 30px;
`;

export const Description = styled.p`
  align-self: center;
  font-size: 17px;
  color: #6f6f6f;
`;

export const Price = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export const PriceNumber = styled.em`
  color: #f0408d;
  font-style: normal;
`;
