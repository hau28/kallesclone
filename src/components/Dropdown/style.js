import styled from "styled-components";
import { A, floatUpAnim } from "../Common";

export const StyledDropdownList = styled.div`
  position: absolute;
  background-color: whitesmoke;
  margin-left: -0.5rem;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: start;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  ${({ show }) => floatUpAnim(show)}
`;

export const StyledDropdownItem = styled(A)`
  margin: 0.25rem 0;
`;
