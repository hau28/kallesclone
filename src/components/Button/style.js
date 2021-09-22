import styled from "styled-components";

export const IconButton = styled.button`
  background-color: transparent;
  margin: 0;
  border: none;
  font-size: 1.5rem;
  opacity: 0.75;
  padding: 0rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
  z-index: 1;
`;

export const StyledBlackButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-weight: 500;
  padding: 0.5rem 2rem;
  cursor: pointer;
  z-index: 1;
`;

export const WhiteButton = styled(StyledBlackButton)`
  background-color: white;
  color: black;
`;
