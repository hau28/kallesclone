import styled, { css, keyframes } from "styled-components";

export const md = (style) => css`
  @media (min-width: 768px) {
    ${style}
  }
`;

export const lg = (style) => css`
  @media (min-width: 992px) {
    ${style}
  }
`;

export const trans = css`
  transition: all 0.25s ease;
`;

export const transSlow = css`
  transition: all 1s ease;
`;

export const contentWidth = css`
  max-width: 1140px;
  align-self: center;
`;

export const responsiveGrid = css`
  display: grid;
  grid-gap: 0.75rem;
  padding: 0.75rem;
  ${lg(css`
    padding: 1.5rem;
    grid-gap: 1.5rem;
  `)};
  ${contentWidth}
`;

export const floatUpAnim = (show) => css`
  transform: ${show ? "translateY(0)" : "translateY(1rem)"};
  opacity: ${show ? 1 : 0};
  pointer-events: ${show ? "auto" : "none"};
  ${trans}
`;

export const floatSideAnim = (show, toLeft) => css`
  transform: ${show
    ? "translateX(0)"
    : toLeft
    ? "translateX(2rem)"
    : "translateX(-2rem)"};
  opacity: ${show ? 1 : 0};
  ${trans}
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Space = styled.div`
  width: ${({ widthScale = 1 }) => (widthScale * 0.5).toString().concat("rem")};
  height: ${({ heightScale = 1 }) =>
    (heightScale * 0.5).toString().concat("rem")};
`;

export const CenterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Tomato = styled.span`
  color: tomato;
`;

export const A = styled.a`
  color: black;
  &:hover {
    color: darkturquoise;
    cursor: pointer;
  }
  ${trans};
`;

export const ResponsiveFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${md(css`
    flex-direction: row;
    justify-content: space-between;
  `)}
`;

export const TopDiv = styled.div`
  z-index: ${({ zIndex = 1 }) => zIndex};
`;
