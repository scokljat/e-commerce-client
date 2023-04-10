import styled from "styled-components";

export const StyledImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border: 1px solid #6f6f6f;
  border-radius: 5px;
  padding: 50px;

  h1 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }
`;
