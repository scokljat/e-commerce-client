import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${({ sideBarIsOpen }) =>
    sideBarIsOpen ? "#fff" : "transparent"};
  z-index: 1;
  position: fixed;
  height: ${({ sideBarIsOpen }) => (sideBarIsOpen ? "100vh" : "none")};
  width: 12.5rem;
  top: 0vh;
  left: 0;
  padding-top: 0.63rem;
  padding-left: 0.63rem;

  @media (max-width: 620px) {
    width: 9.3rem;
    font-size: 0.87rem;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0rem;
  padding: 0rem;
  padding-top: 0.63rem;

  li {
    padding: 0.63rem 1.8rem;
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

export const Line = styled.hr`
  border: 0.06rem solid #6f6f6f;
  width: 9.3rem;
  margin: 0rem 1.8rem;
  margin-bottom: 0.63rem;

  @media (max-width: 620px) {
    width: 6.25rem;
  }
`;

export const SearchContainer = styled(NavLink)`
  cursor: pointer;
  text-decoration: none;
  color: #000;

  p {
    margin: 0rem;
    padding: 0.63rem 1.8rem;
    padding-bottom: 0rem;
  }
`;
