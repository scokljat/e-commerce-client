import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: #fff;
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 200px;
  top: 10vh;
  left: 0;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 10px;

  li {
    padding: 10px 20px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #000;

  :hover {
    color: #f0408d;
  }
`;
