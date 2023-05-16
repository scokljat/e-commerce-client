import styled from "styled-components";
import { motion } from "framer-motion";

export const Image = styled(motion.img)`
  width: 90vw;
  height: 83vh;

  @media (max-width: 870px) {
    width: 85vw;
    height: 73vh;
  }

  @media (max-width: 750px) {
    width: 83vw;
    height: 63vh;
  }

  @media (max-width: 570px) {
    width: 78vw;
    height: 60vh;
  }

  @media (max-width: 500px) {
    width: 75vw;
    height: 45vh;
  }

  @media (max-width: 370px) {
    width: 70vw;
    height: 40vh;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  svg {
    cursor: pointer;
  }
`;

export const SlidesContainer = styled.div``;

export const StyledDot = styled.div`
  height: 0.5rem;
  width: 0.63rem;
  border-radius: 50%;
  background: ${({ current }) => (current ? "#f0408d" : "#6f6f6f")};
  cursor: pointer;
`;

export const DotContainer = styled.div`
  display: flex;
  gap: 0.31rem;
`;
