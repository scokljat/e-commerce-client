import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
  width: 40%;

  p {
    align-self: center;
  }

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 620px) {
    width: 70%;
  }

  @media (max-width: 530px) {
    width: 80%;
  }

  @media (max-width: 530px) {
    width: 90%;
  }
`;

export const StyledInput = styled.input`
  height: 2.5rem;
  border-radius: 0.31rem;
  border: 0.06rem solid #6f6f6f;
  padding: 0rem 0.63rem;
  outline: none;
`;

export const ErrorDescription = styled.p`
  color: #f0408d;
  font-size: 0.75rem;
  margin: 0rem;
`;

export const StyledLink = styled(NavLink)`
  color: #f0408d;
`;
