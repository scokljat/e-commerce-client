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
