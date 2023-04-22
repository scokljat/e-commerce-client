import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ sideBarIsOpen }) =>
    sideBarIsOpen ? "#fff" : "transparent"};
  z-index: 1;
  position: fixed;
  height: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "100vh" : "none")};
  width: 200px;
  top: 0vh;
  left: 0;
  padding-top: 10px;
  padding-left: 10px; ;
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 10px;

  li {
    padding: 10px 30px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ active }) => (active ? " #f0408d" : "#000")};

  :hover {
    color: #f0408d;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #6f6f6f;
  border-radius: 5px;
  padding: 5px;
  width: 70%;
  margin: 20px 20px;

  input {
    height: 30px;
    background: transparent;
    border: none;
    outline: none;
    width: 80%;
  }

  svg {
    fill: #6f6f6f;
  }
`;
