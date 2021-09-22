import styled, { css } from "styled-components";
import { contentWidth, md, responsiveGrid } from "../../components/Primitive";

export const FeaturedCategoriesGrid = styled.div`
  ${responsiveGrid}
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 1fr 1fr;
  ${md(css`
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  `)};
`;

export const FeaturedGridItem = styled.div`
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

export const ItemsGrid = styled.div`
  ${responsiveGrid}
  grid-template-columns: 1fr 1fr;
  ${md(css`
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `)};
`;
