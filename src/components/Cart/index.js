import { PrimaryButton } from "../Button/style";
import AppDrawer from "../Drawer";
import { Divider, Row, Space } from "../Primitive";
import {
  CartItemContainer,
  CartItemImg,
  ItemList,
  Price,
  Summary,
} from "./style";

function CartItem() {
  return (
    <CartItemContainer>
      <CartItemImg src="https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg" />
      <Space widthScale={2} />
      <div>
        <span>Black t-shirt</span>
        <Price>$55.00</Price>
      </div>
    </CartItemContainer>
  );
}

export default function CartDrawer({ open, setOpen }) {
  return (
    <AppDrawer open={open} setOpen={setOpen} title="SHOPPING CART">
      <ItemList>
        <CartItem />
        <Divider />
        <CartItem />
        <Divider />
        <CartItem />
        <Divider />
        <CartItem />
      </ItemList>
      <Summary>
        <Row style={{ justifyContent: "space-between" }}>
          <h5>Subtotal</h5>
          <h5>$151.05</h5>
        </Row>
        <Space />
        <PrimaryButton>CHECK OUT</PrimaryButton>
      </Summary>
    </AppDrawer>
  );
}
