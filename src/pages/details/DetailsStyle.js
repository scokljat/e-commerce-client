import styled from "styled-components";

export const Image = styled.img`
  width: 28.1rem;
  height: 35.6rem;

  @media (max-width: 920px) {
    width: 18.7rem;
    height: 28.1rem;
  }

  @media (max-width: 800px) {
    width: 25rem;
    height: 29.3rem;
  }

  @media (max-width: 500px) {
    width: 20rem;
    height: 25rem;
  }

  @media (max-width: 400px) {
    width: 17rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 80%;
  gap: 5rem;
  justify-content: center;

  @media (max-width: 1260px) {
    width: 90%;
  }

  @media (max-width: 920px) {
    width: 100%;
    gap: 3.1rem;
    margin-top: 3.1rem;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    font-size: 0.9rem;
    margin-top: 0rem;
    width: 90%;
    gap: 1.8rem;

    p {
      margin: 0rem;
    }
  }

  @media (max-width: 500px) {
    width: 90%;
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

export const Description = styled.p`
  text-align: justify;
`;
