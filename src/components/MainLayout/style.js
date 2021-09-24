import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { abstractIconButton } from "../Button/style";
import { trans } from "../Primitive";

export const MainLayoutContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
`;

export const BreadcrumbsContainer = styled.div`
  background-color: whitesmoke;
  padding: 1rem;
  display: flex;
  align-items: center;
  list-style: none;
`;

export const BreadcrumbItem = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.85rem;
  ${(props) =>
    props.disable
      ? css`
          pointer-events: none;
          color: gray;
        `
      : null}
  ${abstractIconButton}
  ${trans}
`;
