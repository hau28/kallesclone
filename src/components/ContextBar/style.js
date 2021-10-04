import styled from "styled-components";
import { ResponsiveFlex } from "../Common";

export const StyledContextBar = styled(ResponsiveFlex)`
  background-color: whitesmoke;
  padding: 0.5rem 1rem;
  color: grey;
  font-size: 0.8rem;
`;

export const StyledContextBarCenter = styled.div`
  position: absolute;
  width: calc(100% - 2rem);
  display: flex;
  justify-content: center;
  @media (max-width: 768px) {
    position: relative;
  }
`;
