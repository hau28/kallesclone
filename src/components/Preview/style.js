import styled, { css } from "styled-components";
import { WhiteButton } from "../Button/style";
import { customTrans, trans, transSlow } from "../Primitive";

export const CategoryPreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  &:hover {
    transform: scale(1.25);
  }
  ${transSlow}
`;

export const CategoryButton = styled(WhiteButton)`
  position: absolute;
  left: 50%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 1.5rem;
  transform: translateX(-50%);
`;

export const ItemPreviewContainer = styled.div`
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  background: blue;
`;

export const ItemWrap = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
`;

export const ItemTitle = styled.p`
  font-weight: 600;
  margin: 0;
  margin-top: 1rem;
`;

export const ItemPrice = styled.p`
  color: gray;
`;

export const OnHoverContainer = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 1;
  }
  ${transSlow}
`;

export const ItemImg = styled.div`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  background: url("https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg");
  background-position: center;
  background-size: cover;
  ${(props) =>
    props.hover
      ? css`
          transform: scale(1.25);
          opacity: 1;
        `
      : null}

  ${transSlow}
`;
