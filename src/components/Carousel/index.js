import Slider from "react-slick";
import { IntroduceSection } from "../IntroduceSection";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  return (
    <Slider {...settings} style={{ overflowX: "hidden" }}>
      <IntroduceSection />
      <IntroduceSection />
      <IntroduceSection />
    </Slider>
  );
}
