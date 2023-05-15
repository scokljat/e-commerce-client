import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.8rem;

  @media (max-width: 1270px) {
    width: 93%;
  }

  @media (max-width: 1100px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 650px) {
    width: 85%;
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const Description = styled.p`
  align-self: center;
  font-size: 1.06rem;
  color: #6f6f6f;

  @media (max-width: 620px) {
    font-size: 0.87rem;
  }
`;

export const Price = styled.p`
  font-size: 1.5rem;
  font-weight: bold;

  @media (max-width: 620px) {
    font-size: 1.06rem;
  }
`;

export const PriceNumber = styled.em`
  color: #f0408d;
  font-style: normal;
`;
