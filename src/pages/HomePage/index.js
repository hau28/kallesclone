import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../../components/Carousel";
import { IntroduceSection } from "../../components/IntroduceSection";
import MainLayout from "../../components/MainLayout";
import { Space } from "../../components/Primitive";
import { CategoryImg, FeaturedCategoriesGrid, GridItem } from "./style";

const CAROUSEL = [
  {
    season: "SUMMER 2020",
    collection: "New Arrival Collection",
    bgUrl: "https://i.ibb.co/JH0d4CD/1.jpg",
  },
  {
    season: "NEW SEASON",
    collection: "Lookbook Collection",
    bgUrl: "https://i.ibb.co/vZP2R6h/2.jpg",
  },
  {
    season: "SUMMER SALE",
    collection: "Save up to 70%",
    bgUrl: "https://i.ibb.co/p4xqWdg/3.jpg",
  },
];

const SHIRT = "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg";

export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(-1);
  return (
    <MainLayout>
      <Carousel
        onInit={() => setCarouselIndex(0)}
        afterChange={(i) => {
          console.log(i);
          setCarouselIndex(i);
        }}
      >
        {CAROUSEL.map((item, index) => (
          <IntroduceSection
            key={index}
            {...item}
            show={carouselIndex === index}
            rightAlign={index % 2 === 1}
          />
        ))}
      </Carousel>
      <Space heightScale={4} />
      <FeaturedCategoriesGrid>
        <GridItem>
          <CategoryImg src="https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg" />
        </GridItem>
        <GridItem>
          <CategoryImg src="https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg" />
        </GridItem>
        <GridItem>
          <CategoryImg src="https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg" />
        </GridItem>
        <GridItem>
          <CategoryImg src="https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg" />
        </GridItem>
      </FeaturedCategoriesGrid>
    </MainLayout>
  );
}
