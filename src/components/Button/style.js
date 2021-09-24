import styled, { css } from "styled-components";
import { colors } from "../../constants/colors";
import { trans } from "../Primitive";

export const IconButton = styled.button`
  background-color: transparent;
  margin: 0;
  border: none;
  font-size: ${({ fontSize = "1.5rem" }) => fontSize};
  opacity: 0.75;
  padding: 0rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
  z-index: 1;
  transform: rotate(0deg);
  &:hover {
    transform: rotate(${({ rotate }) => (rotate ? "180deg" : "0deg")});
    ${(props) =>
      props.primaryIcon
        ? css`
            color: ${colors.primary};
          `
        : null};
  }
  ${trans}
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

export const PrimaryButton = styled.button`
  border: none;
  background-color: ${colors.primary};
  border-radius: 999px;
  padding: 0.75rem;
  font-weight: 500;
  color: white;
  font-size: 0.8rem;
  letter-spacing: 3px;
`;

export const SecondaryButton = styled(PrimaryButton)`
  background-color: whitesmoke;
  color: black;
`;

export const abstractIconButton = css`
  &:hover {
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const PrimaryIconButton = styled.span`
  ${abstractIconButton}
`;

export const QuantityButtonContainer = styled.div`
  border: solid 1px black;
  border-radius: 999px;
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  align-self: stretch;
`;

export const QuantityText = styled.span`
  font-weight: 700;
`;
