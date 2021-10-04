import { Row, Space } from "../Common";
import ReactCountryFlag from "react-country-flag";

export function WithFlag({ text }) {
  function getCode() {
    switch (text) {
      case "VND":
        return "VN";
      case "AUD":
        return "AU";
      default:
        return "US";
    }
  }
  return (
    <Row>
      <ReactCountryFlag
        countryCode={getCode()}
        svg
        style={{
          width: "1rem",
          height: "1rem",
        }}
      />
      <Space widthScale={0.75} />
      {text}
    </Row>
  );
}

export function withFlags({ data }) {
  return data.map((item) => <WithFlag text={item} />);
}
