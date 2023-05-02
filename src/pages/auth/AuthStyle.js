import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 40%;

  p {
    align-self: center;
  }
`;

export const StyledInput = styled.input`
  height: 40px;
  border-radius: 5px;
  border: 1px solid #6f6f6f;
  padding: 0px 10px;
  outline: none;
`;

export const ErrorDescription = styled.p`
  color: #f0408d;
  font-size: 12px;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  color: #f0408d;
`;
