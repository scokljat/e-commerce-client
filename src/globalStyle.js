import styled from "styled-components";

export const MainContainer = styled.div`
  padding: 1.25rem 3.12rem;
  display: flex;
  justify-content: center;
  align-items: ${({ authPage }) => authPage && "center"};
  height: ${({ authPage }) => authPage && "70vh"};

  @media (max-width: 940px) {
    padding: 1.25rem 0.63rem;
  }

  @media (max-width: 620px) {
    padding: 1.25rem 3.12rem;
  }
`;

export const StyledButton = styled.button`
  background: #f0408d;
  color: #fff;
  padding: 0.63rem;
  border: 0rem;
  border-radius: 0.31rem;
  cursor: pointer;

  @media (max-width: 620px) {
    font-size: 0.75rem;
  }
`;
