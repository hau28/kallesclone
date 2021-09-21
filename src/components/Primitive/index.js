import styled, { css, keyframes } from "styled-components";

export const trans = css`
  transition: all 0.25s ease;
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

export const StyledBlackButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  font-weight: 500;
  padding: 0.5rem 2rem;
  cursor: pointer;
`;
