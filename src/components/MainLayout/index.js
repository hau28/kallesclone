import { useState } from "react";
import ContextBar from "../ContextBar";
import NavBar from "../NavBar";
import { MainLayoutContainer } from "./style";
import CartDrawer from "../Cart";
import { useDispatch } from "react-redux";
import { openCart } from "../../redux/Cart/actions";

export default function MainLayout({ children }) {
  return (
    <MainLayoutContainer>
      <ContextBar />
      <NavBar />
      {children}
      <CartDrawer />
    </MainLayoutContainer>
  );
}
