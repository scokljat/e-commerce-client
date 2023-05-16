import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.63rem;
`;

export const StyledButton = styled.button`
  background: #fff;
  border: 0.06rem solid #6f6f6f;
  color: #6f6f6f;
  padding: 1.2rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const ArrowContainer = styled.a`
  border: 0.12rem solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 4.3rem;
  right: 5.6rem;
  cursor: pointer;

  svg {
    fill: #fff;
  }

  @media (max-width: 870px) {
    right: 5rem;
    bottom: 8.7rem;
  }

  @media (max-width: 783px) {
    right: 4.3rem;
  }

  @media (max-width: 750px) {
    bottom: 13.7rem;
  }

  @media (max-width: 680px) {
    bottom: 14.3rem;
  }

  @media (max-width: 570px) {
    bottom: 15.6rem;
  }

  @media (max-width: 500px) {
    bottom: 21.8rem;
  }

  @media (max-width: 460px) {
    right: 3.8rem;
    bottom: 21rem;
  }

  @media (max-width: 350px) {
    right: 3.7rem;
    bottom: 23.7rem;
  }
`;

export const HomeSection = styled.section`
  margin: 0.63rem 0rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 80%;
  }

  @media (max-width: 350px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2.5rem;

  @media (max-width: 620px) {
    font-size: 1.2rem;
  }
`;
