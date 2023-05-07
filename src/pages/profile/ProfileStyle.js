import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  border: 0.06rem solid #6f6f6f;
  border-radius: 0.3rem;
  padding: 2.5rem;
  width: 30%;

  h3 {
    margin: 0;
    font-size: 0.93rem;
  }

  @media (max-width: 1100px) {
    width: 40%;
  }

  @media (max-width: 700px) {
    width: 50%;
  }

  @media (max-width: 620px) {
    width: 60%;
  }

  @media (max-width: 550px) {
    width: 70%;
  }

  @media (max-width: 480px) {
    width: 80%;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`;

export const Username = styled.div`
  display: flex;
  align-items: center;
  gap: 0.63rem;

  h1 {
    margin: 0rem;
    font-size: 1.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  align-self: center;
`;
