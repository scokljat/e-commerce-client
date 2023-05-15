import styled from "styled-components";

export const StyledInput = styled.input`
  height: 2.5rem;
  border-radius: 0.31rem;
  border: 0.06rem solid #6f6f6f;
  padding: 0rem 0.63rem;
  outline: none;
  width: 50%;

  @media (max-width: 800px) {
    width: 60%;
  }

  @media (max-width: 500px) {
    width: 70%;
  }
`;
