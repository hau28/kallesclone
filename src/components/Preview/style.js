import styled from "styled-components";
import { WhiteButton } from "../Button/style";
import { transSlow } from "../Primitive";

export const CategoryImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  &:hover {
    transform: scale(1.25);
  }
  ${transSlow}
`;

export const CategoryPreviewContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  cursor: pointer;
`;

export const ButtonInPreview = styled(WhiteButton)`
  position: absolute;
  left: 50%;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: 1.5rem;
  transform: translateX(-50%);
`;
