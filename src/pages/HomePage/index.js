import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "../../components/Carousel";
import { IntroduceSection } from "../../components/IntroduceSection";
import MainLayout from "../../components/MainLayout";
import { CategoryPreview, ItemPreview } from "../../components/Preview";
import { Space } from "../../components/Primitive";
import { SectionTitle } from "../../components/Typography";
import { FeaturedCategoriesGrid, FeaturedGridItem, ItemsGrid } from "./style";

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

const trendingItems = [
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
  },
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
  },
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
  },
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
  },
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
  },
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
  },
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
  },
  {
    title: "Analogue Resin Strap",
    price: "30.00",
    isNew: true,
    wrapUrl: "https://i.ibb.co/3m43rrS/hmgoepprod-1.jpg",
    bgUrl: "https://i.ibb.co/dDwtLtN/hmgoepprod-3.jpg",
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
          <FeaturedGridItem>
            <CategoryPreview {...category} />
          </FeaturedGridItem>
        ))}
      </FeaturedCategoriesGrid>
      <Space heightScale={12} />
      <SectionTitle title="TRENDING" desc="Top view in this week" />
      <ItemsGrid>
        {trendingItems.map((item, i) => (
          <ItemPreview {...item} />
        ))}
      </ItemsGrid>
    </MainLayout>
  );
}
