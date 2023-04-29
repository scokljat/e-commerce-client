import styled from "styled-components";

export const Container = styled.div`
  z-index: 2;
  padding: 10px;
  background: #fff;
  position: absolute;
  top: ${({ detailsPage }) => !detailsPage && "10px"};
  bottom: ${({ detailsPage }) => detailsPage && "200px"};
  right: ${({ detailsPage }) => (detailsPage ? "480px" : "90px")};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  border: 1px solid #6f6f6f;

  p {
    color: #f0408d;
    font-size: 12px;
    margin: 0;
    margin-bottom: 5px;
  }
`;

export const SizeContainer = styled.select`
  height: 30px;
  margin: 10px;
  padding: 0px 10px;
`;

export const Size = styled.option``;
