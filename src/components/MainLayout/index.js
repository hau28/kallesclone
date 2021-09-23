import { useState } from "react";
import ContextBar from "../ContextBar";
import NavBar from "../NavBar";
import { MainLayoutContainer } from "./style";
import CartDrawer from "../Cart";

export default function MainLayout({ children }) {
  const [openCart, setOpenCart] = useState(true);
  return (
    <MainLayoutContainer>
      <ContextBar />
      <NavBar onClickCart={() => setOpenCart(true)} />
      {children}
      <CartDrawer open={openCart} setOpen={setOpenCart} />
    </MainLayoutContainer>
  );
}
