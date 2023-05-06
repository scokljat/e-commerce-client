import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
  padding: 1.8rem;

  p {
    margin: 0rem;
    font-size: 1.2rem;
  }

  @media (max-width: 980px) {
    gap: 1rem;
    padding: 1rem;

    p {
      font-size: 0.93rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`;
