import { QuantityButton } from "../Button";
import { IconButton, PrimaryButton, SecondaryButton } from "../Button/style";
import AppDrawer from "../Drawer";
import { Row, Space } from "../Common";
import {
  CartItemContainer,
  CartItemImg,
  ItemList,
  Price,
  Summary,
} from "./style";
import { BsTrash } from "react-icons/bs";
import { Divider } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  changeCartItemQuantity,
  closeCart,
  removeFromCart,
} from "../../redux/Cart/actions";

function CartItem({ imgUrl, name, price, quantity, id }) {
  const dispatch = useDispatch();
  return (
    <CartItemContainer>
      <CartItemImg src={imgUrl} />
      <Space widthScale={2} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          alignItems: "flex-start",
        }}
      >
        <span>{name}</span>
        <Price>${price}</Price>
        <QuantityButton
          onPlus={() => dispatch(changeCartItemQuantity({ id: id, change: 1 }))}
          onMinus={() =>
            dispatch(changeCartItemQuantity({ id: id, change: -1 }))
          }
          value={quantity}
          onDelete={() => dispatch(removeFromCart(id))}
        />
        <IconButton
          style={{
            fontSize: "1.2rem",
            padding: 0,
            margin: 0,
            marginTop: "0.75rem",
          }}
        >
          <BsTrash onClick={() => dispatch(removeFromCart(id))} />
        </IconButton>
      </div>
    </CartItemContainer>
  );
}

export default function CartDrawer() {
  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const subTotal = () =>
    cart.list.reduce(
      (sum, item) =>
        parseFloat(sum) + parseFloat(item.price) * parseFloat(item.quantity),
      0
    );
  return (
    <AppDrawer
      open={cart.open}
      onClose={() => dispatch(closeCart())}
      title="SHOPPING CART"
    >
      <ItemList>
        {cart.list.map((item) => (
          <>
            <CartItem {...item} />
            <Divider />
          </>
        ))}
      </ItemList>
      <Summary>
        <Row style={{ justifyContent: "space-between" }}>
          <h5>Subtotal</h5>
          <h5>${subTotal()}</h5>
        </Row>
        <Space heightScale={2} />
        <SecondaryButton>VIEW CART</SecondaryButton>
        <Space heightScale={2} />
        <PrimaryButton>CHECK OUT</PrimaryButton>
      </Summary>
    </AppDrawer>
  );
}
