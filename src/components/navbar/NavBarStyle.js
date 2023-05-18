import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0.63rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.93rem;

  svg {
    cursor: pointer;
  }

  h3 {
    font-size: 0.93rem;
    font-weight: 200;
    cursor: pointer;
    color: #6f6f6f;
    padding-bottom: 0.18rem;
  }
`;

export const BagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.18rem;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  color: #6f6f6f;

  @media (max-width: 620px) {
    font-size: 0.87rem;

    svg {
      height: 1.2rem;
      width: 1.2rem;
    }
  }
`;

export const TotalProducts = styled.div`
  width: 1.43rem;
  height: 1.43rem;
  background: #f0408d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0.93rem;
  bottom: 0.93rem;

  p {
    font-size: 1.06rem;
    font-weight: 600;
    margin: 0rem;
    color: #fff;
  }

  @media (max-width: 400px) {
    width: 1.3rem;
    height: 1.3rem;
    left: 0.7rem;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  gap: 0.43rem;
  align-items: center;
  margin-top: 0.5rem;
`;
