import { Link } from "react-router-dom";
import { StyledBrand } from "./style";

export default function Brand() {
  return (
    <Link to={`/`}>
      <StyledBrand
        alt="kallas brand logo"
        src="https://cdn.shopify.com/s/files/1/0332/6420/5963/files/kalles.svg?v=10756066450937027033"
      />
    </Link>
  );
}
