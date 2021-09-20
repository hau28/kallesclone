import ContextBar from "../ContextBar";
import NavBar from "../NavBar";

export default function MainLayout({ children }) {
  return (
    <div>
      <ContextBar />
      <NavBar />
      {children}
    </div>
  );
}
