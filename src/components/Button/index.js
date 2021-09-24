import {
  IconButton,
  ItemActionButton,
  ItemActionContent,
  ItemActionIcon,
  QuantityButtonContainer,
  QuantityText,
} from "./style";
import { TiMinus, TiPlus } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";
import { useState } from "react";

export function HoverItemButton({
  hoverState,
  IconComponent,
  children,
  ...props
}) {
  const [hover, setHover] = hoverState;
  return (
    <ItemActionButton
      {...props}
      onMouseOver={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      hover={hover}
    >
      <ItemActionContent hover={hover}>{children}</ItemActionContent>
      <ItemActionIcon hover={hover}>
        <IconComponent style={{ marginTop: -7 }} />
      </ItemActionIcon>
    </ItemActionButton>
  );
}

export function QuantityButton({ value, onPlus, onMinus, onDelete }) {
  return (
    <QuantityButtonContainer>
      <IconButton
        fontSize="1.1rem"
        primaryIcon
        onClick={value > 1 ? onMinus : onDelete}
      >
        {value > 1 ? (
          <TiMinus />
        ) : (
          <BsTrash style={{ fontSize: 13, marginTop: 4 }} />
        )}
      </IconButton>
      <QuantityText>{value}</QuantityText>
      <IconButton fontSize="1.1rem" primaryIcon onClick={onPlus}>
        <TiPlus />
      </IconButton>
    </QuantityButtonContainer>
  );
}
