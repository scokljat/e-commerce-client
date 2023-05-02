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
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #6f6f6f;
`;

export const TotalProducts = styled.div`
  width: 23px;
  height: 23px;
  background: #f0408d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 15px;
  bottom: 15px;

  p {
    font-size: 17px;
    font-weight: 600;
    margin: 0;
    color: #fff;
  }
`;
