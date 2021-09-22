import {
  ButtonInPreview,
  CategoryImg,
  CategoryPreviewContainer,
} from "./style";

export function CategoryPreview({ title, bgUrl }) {
  return (
    <CategoryPreviewContainer>
      <CategoryImg src={bgUrl} />
      <ButtonInPreview>{title}</ButtonInPreview>
    </CategoryPreviewContainer>
  );
}
