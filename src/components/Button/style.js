import styled, { css } from "styled-components";
import { trans } from "../Primitive";

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

export const ItemActionButton = styled(WhiteButton)`
  border-radius: 9999px;
  font-weight: 400;
  background-color: white;
  color: black;
  width: 9rem;
  height: 2.5rem;
  ${(props) =>
    props.hover
      ? css`
          background-color: black;
          color: white;
        `
      : null}
  ${trans}
`;

export const ItemActionIcon = styled.span`
  position: absolute;
  transform: translate(-50%, calc(-50% + 1.25rem));
  font-size: 1.25rem;
  opacity: 0;
  pointer-events: none;
  ${(props) =>
    props.hover
      ? css`
          opacity: 1;
          transform: translate(-50%, -50%);
        `
      : null}
  ${trans}
`;

export const ItemActionContent = styled.span`
  pointer-events: none;
  position: absolute;
  transform: translate(-50%, -50%);
  opacity: 1;
  ${(props) =>
    props.hover
      ? css`
          opacity: 0;
          transform: translate(-50%, calc(-50% - 1.25rem));
        `
      : null}
  ${trans}
`;
