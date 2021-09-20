import { FiChevronDown } from "react-icons/fi";
import { Row, Space, TopDiv } from "../Primitive";
import { StyledDropdownItem, StyledDropdownList } from "./style";
import { useState } from "react";

export default function Dropdown({ data }) {
  const [showList, setShowList] = useState(false);
  return (
    <TopDiv zIndex={2} onMouseLeave={() => setShowList(false)}>
      <Row onMouseOver={() => setShowList(true)}>
        {data[0]} <Space widthScale={0.5} />
        <FiChevronDown style={{ marginTop: 2 }} />
      </Row>
      <StyledDropdownList show={showList}>
        {data.map((item) => (
          <StyledDropdownItem onClick={() => setShowList(false)}>
            {item}
          </StyledDropdownItem>
        ))}
      </StyledDropdownList>
    </TopDiv>
  );
}
