import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-end;
  padding-right: 10px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  svg {
    cursor: pointer;
  }

  h3 {
    font-size: 15px;
    font-weight: 200;
    cursor: pointer;
    color: #6f6f6f;
    padding-bottom: 3px;
  }
`;

export const BagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  p {
    font-size: 24px;
    font-weight: 600;
    margin: 0;
    padding-bottom: 3px;
    color: #f0408d;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #6f6f6f;
`;
