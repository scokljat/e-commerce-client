import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    cursor: pointer;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #6f6f6f;
  border-radius: 5px;
  padding: 5px;

  input {
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
  }

  svg {
    fill: #6f6f6f;
  }
`;

export const BagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  p {
    font-size: 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #6f6f6f;
`;
