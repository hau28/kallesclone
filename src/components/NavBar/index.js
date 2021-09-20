import { StyledNavBar, StyledBrandRow } from "./style";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Brand from "../Brand";
import { Row, Space } from "../Primitive";
import { IconButton } from "../Button/style";

export default function NavBar() {
  return (
    <StyledNavBar>
      <IconButton>
        <HiOutlineMenuAlt1 />
      </IconButton>
      <Row>
        <IconButton>
          <IoSearchOutline />
        </IconButton>
        <Space />
        <IconButton>
          <IoCartOutline />
        </IconButton>
      </Row>
      <StyledBrandRow>
        <Brand />
      </StyledBrandRow>
    </StyledNavBar>
  );
}
