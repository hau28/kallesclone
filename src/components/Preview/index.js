import { useState } from "react";
import { Space } from "../Common";
import {
  CategoryButton,
  CategoryImg,
  CategoryPreviewContainer,
  ItemImg,
  ItemPreviewContainer,
  ItemPrice,
  ItemTitle,
  ItemWrap,
  OnHoverContainer,
} from "./style";
import { FiEye } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { HoverItemButton } from "../Button";
import { useDispatch } from "react-redux";
import { addToCart, openCart } from "../../redux/Cart/actions";
import { useHistory } from "react-router";

export function CategoryPreview({ title, bgUrl }) {
  return (
    <CategoryPreviewContainer>
      <CategoryImg src={bgUrl} />
      <CategoryButton>{title}</CategoryButton>
    </CategoryPreviewContainer>
  );
}

export function ItemPreview({ title, price, isNew, sale, bgUrl, wrapUrl, id }) {
  const quickViewHoverState = useState(false);
  const quickShopHoverState = useState(false);
  const [containerHover, setContainerHover] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <div>
      <ItemPreviewContainer
        onMouseOver={() => {
          setContainerHover(true);
        }}
        onMouseLeave={() => {
          setContainerHover(false);
        }}
      >
        <ItemWrap src={wrapUrl} />
        <OnHoverContainer>
          <ItemImg
            hover={containerHover}
            src={bgUrl}
            onClick={() => history.push(`/product/${id}`)}
          />
          <HoverItemButton
            mouseOverAppend={() => {
              setContainerHover(true);
            }}
            hoverState={quickViewHoverState}
            IconComponent={FiEye}
          >
            Quick View
          </HoverItemButton>
          <Space />
          <HoverItemButton
            mouseOverAppend={() => {
              setContainerHover(true);
            }}
            hoverState={quickShopHoverState}
            IconComponent={IoCartOutline}
            onClick={() => {
              dispatch(
                addToCart({
                  imgUrl: wrapUrl,
                  name: title,
                  price: price,
                  quantity: 1,
                })
              );
              dispatch(openCart());
            }}
          >
            Quick Shop
          </HoverItemButton>
        </OnHoverContainer>
      </ItemPreviewContainer>
      <ItemTitle>{title}</ItemTitle>
      <ItemPrice>${price}</ItemPrice>
    </div>
  );
}
