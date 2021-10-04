import { StyledNavBar, StyledBrandRow } from "./style";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";
import Brand from "../Brand";
import { Row, Space } from "../Common";
import { IconButton } from "../Button/style";
import { useDispatch } from "react-redux";
import { openCart } from "../../redux/Cart/actions";

export default function NavBar() {
  const dispatch = useDispatch();
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
          <IoCartOutline
            onClick={() => {
              dispatch(openCart());
            }}
          />
        </IconButton>
      </Row>
      <StyledBrandRow>
        <Brand />
      </StyledBrandRow>
    </StyledNavBar>
  );
}
