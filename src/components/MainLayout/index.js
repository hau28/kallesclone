import { useState } from "react";
import ContextBar from "../ContextBar";
import NavBar from "../NavBar";
import {
  BreadcrumbsContainer,
  MainLayoutContainer,
  BreadcrumbItem,
} from "./style";
import CartDrawer from "../Cart";
import { useDispatch } from "react-redux";
import { openCart } from "../../redux/Cart/actions";
import { Breadcrumbs, Link, Typography } from "@mui/material";
import { Container } from "react-bootstrap";
import { GrFormNext } from "react-icons/gr";
import { Space } from "../Common";

export function MainLayout({ children }) {
  return (
    <MainLayoutContainer>
      <ContextBar />
      <NavBar />
      {children}
      <CartDrawer />
    </MainLayoutContainer>
  );
}

export function DetailedLayout({ children, path }) {
  return (
    <MainLayout>
      <BreadcrumbsContainer aria-label="breadcrumb">
        <Container>
          {path.map(({ name, link }, i) =>
            i < path.length - 1 ? (
              <>
                <BreadcrumbItem to={link}>{name}</BreadcrumbItem>
                <GrFormNext style={{ margin: "0 0.5rem" }} />
              </>
            ) : (
              <BreadcrumbItem disable>{name}</BreadcrumbItem>
            )
          )}
        </Container>
      </BreadcrumbsContainer>
      {children}
    </MainLayout>
  );
}
