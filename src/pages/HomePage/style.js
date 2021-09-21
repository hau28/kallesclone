import styled from "styled-components";

export const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const FeaturedCategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 2rem;
`;

export const GridItem = styled.div`
  &:first-child {
    grid-column: 1/2;
    grid-row: 1/3;
  }
  &:nth-child(2),
  :nth-child(3) {
    grid-column: 2/3;
  }
  &:nth-child(4) {
    grid-column: 3/4;
    grid-row: 1/3;
  }
`;
