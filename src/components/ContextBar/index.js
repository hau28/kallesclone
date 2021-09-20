import { IconButton } from "@mui/material";
import {
  CenterColumn,
  Row,
  Space,
  Tomato,
  A,
  AbsoluteCenterRow,
} from "../Primitive";
import { StyledContextBar, StyledContextBarCenter } from "./style";
import { FiPhone } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import Dropdown from "../Dropdown";
import { withFlags } from "../Flag";

const LANGS = ["English", "Tiếng Việt"];
const CURRENCIES = ["USD", "VND", "AUD"];

export default function ContextBar() {
  return (
    <StyledContextBar>
      <Row>
        <FiPhone />
        <Space />
        <span>+01 23456789</span>
        <Space widthScale={2} />
        <HiOutlineMail />
        <Space />
        <span>kalles@domain.com</span>
      </Row>
      <Space heightScale={0.5} />
      <StyledContextBarCenter>
        <span>
          Summer sale discount off <Tomato>50%</Tomato>! <A>Shop now</A>
        </span>
      </StyledContextBarCenter>
      <Space heightScale={0.5} />
      <Row>
        <Dropdown data={LANGS} />
        <Space widthScale={2} />
        <Dropdown data={withFlags({ data: CURRENCIES })} />
      </Row>
    </StyledContextBar>
  );
}
