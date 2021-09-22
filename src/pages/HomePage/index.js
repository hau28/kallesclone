import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../../components/Carousel";
import { IntroduceSection } from "../../components/IntroduceSection";
import MainLayout from "../../components/MainLayout";
import { CategoryPreview } from "../../components/Preview";
import { Space } from "../../components/Primitive";
import { FeaturedCategoriesGrid, GridItem } from "./style";

const carousel = [
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

const featuredCategories = [
  {
    title: "Women",
    bgUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
  },
  {
    title: "Acessories",
    bgUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
  },
  {
    title: "Footwear",
    bgUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
  },
  {
    title: "Watches",
    bgUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
  },
];
export default function HomePage() {
  const [carouselIndex, setCarouselIndex] = useState(-1);
  return (
    <MainLayout>
      <Carousel
        onInit={() => setCarouselIndex(0)}
        afterChange={(i) => {
          setCarouselIndex(i);
        }}
      >
        {carousel.map((item, index) => (
          <IntroduceSection
            key={index}
            {...item}
            show={carouselIndex === index}
            rightAlign={index % 2 === 1}
          />
        ))}
      </Carousel>
      <FeaturedCategoriesGrid>
        {featuredCategories.map((category) => (
          <GridItem>
            <CategoryPreview {...category} />
          </GridItem>
        ))}
      </FeaturedCategoriesGrid>
    </MainLayout>
  );
}
