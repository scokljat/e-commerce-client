import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const StyledButton = styled.button`
  background: #fff;
  border: 1px solid #6f6f6f;
  color: #6f6f6f;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

export const ArrowContainer = styled.a`
  border: 2px solid #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 70px;
  right: 80px;
  cursor: pointer;

  svg {
    fill: #fff;
  }

  @media (max-width: 1230px) {
    right: 70px;
  }

  @media (max-width: 1160px) {
    bottom: 70px;
  }

  @media (max-width: 900px) {
    bottom: 70px;
  }

  @media (max-width: 870px) {
    right: 80px;
    bottom: 140px;
  }

  @media (max-width: 783px) {
    right: 70px;
    bottom: 140px;
  }

  @media (max-width: 750px) {
    bottom: 200px;
  }

  @media (max-width: 680px) {
    bottom: 210px;
  }

  @media (max-width: 570px) {
    bottom: 230px;
  }

  @media (max-width: 530px) {
    bottom: 230px;
  }

  @media (max-width: 500px) {
    right: 70px;
    bottom: 330px;
  }

  @media (max-width: 460px) {
    bottom: 330px;
  }

  @media (max-width: 350px) {
    bottom: 370px;
  }
`;

export const HomeSection = styled.section`
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
    width: 80%;
  }

  @media (max-width: 350px) {
    width: 70%;
  }
`;

export const Title = styled.h1`
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 40px;

  @media (max-width: 620px) {
    font-size: 20px;
  }
`;
