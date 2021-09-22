import styled, { css } from "styled-components";
import { md } from "../../components/Primitive";

export const FeaturedCategoriesGrid = styled.div`
  display: grid;
  grid-gap: 0.75rem;
  padding: 0.75rem;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr;
  ${md(css`
    padding: 1.5rem;
    grid-gap: 1.5rem;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `)}
`;

export const GridItem = styled.div`
  &:first-child {
    grid-column: 1/3;
  }
  &:nth-child(4) {
    grid-column: 2/3;
    grid-row: 2/4;
  }
  ${md(css`
    &:first-child {
      grid-column: 1/2;
      grid-row: 1/3;
    }
    &:nth-child(4) {
      grid-column: 3/4;
      grid-row: 1/3;
    }
  `)}
`;
