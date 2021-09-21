import styled, { css } from "styled-components";
import { md, lg, floatSideAnim } from "../Primitive";
import { Container } from "react-bootstrap";

export const StyledIntroduceSection = styled.div`
  background-image: ${(props) => `url(${props.bgUrl})`};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  pointer-events: none;
  height: calc(50vh - 6rem);
  ${md(css`
    height: calc(75vh - 6rem);
  `)}
  ${lg(css`
    height: calc(100vh - 6rem);
  `)}
`;

export const StyledSeasonText = styled.p`
  margin: 0;
  font-size: min(3.5vw, 1.5rem);
  font-weight: 500;
`;

export const StyledCollectionText = styled.h1`
  margin: 0;
  font-size: min(7vw, 4rem);
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => (props.rightAlign ? "flex-end" : "flex-start")};
  ${(props) => floatSideAnim(props.show, props.rightAlign)}
`;
