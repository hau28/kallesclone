import {
  CategoryButton,
  CategoryImg,
  CategoryPreviewContainer,
  ItemActionButton,
  ItemImg,
  ItemPreviewContainer,
  ItemPrice,
  ItemTitle,
  ItemWrap,
} from "./style";

export function CategoryPreview({ title, bgUrl }) {
  return (
    <CategoryPreviewContainer>
      <CategoryImg src={bgUrl} />
      <CategoryButton>{title}</CategoryButton>
    </CategoryPreviewContainer>
  );
}

export function ItemPreview({ title, price, isNew, sale, bgUrl, wrapUrl }) {
  return (
    <div>
      <ItemPreviewContainer>
        <ItemImg src={bgUrl}></ItemImg>
        <ItemWrap src={wrapUrl} />
      </ItemPreviewContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemPrice>{price}</ItemPrice>
    </div>
  );
}
