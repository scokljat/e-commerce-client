import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  padding: 0.63rem;
  background: #fff;
  position: ${({ detailsPage }) => !detailsPage && "absolute"};
  top: ${({ detailsPage }) => !detailsPage && "0.63rem"};
  right: ${({ detailsPage }) => !detailsPage && "5.6rem"};
  width: ${({ detailsPage }) => detailsPage && "30%"};
  border-radius: 0.31rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  border: 0.06rem solid #6f6f6f;
  align-self: ${({ detailsPage }) => detailsPage && "center"};

  p {
    color: #f0408d;
    font-size: 0.75rem;
    margin: 0rem;
    margin-bottom: 0.31rem;
  }

  @media (max-width: 908px) {
    width: ${({ detailsPage }) => detailsPage && "40%"};
  }

  @media (max-width: 800px) {
    width: ${({ detailsPage }) => detailsPage && "30%"};
  }

  @media (max-width: 560px) {
    width: ${({ detailsPage }) => detailsPage && "40%"};
  }

  @media (max-width: 450px) {
    width: ${({ detailsPage }) => detailsPage && "50%"};
  }
`;

export const SizeContainer = styled.select`
  height: 1.8rem;
  margin: 0.63rem;
  padding: 0rem 0.63rem;
`;

export const Size = styled.option``;
