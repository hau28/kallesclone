import ContextBar from "../ContextBar";
import NavBar from "../NavBar";
import { MainLayoutContainer } from "./style";

export default function MainLayout({ children }) {
  return (
    <MainLayoutContainer>
      <ContextBar />
      <NavBar />
      {children}
    </MainLayoutContainer>
  );
}
