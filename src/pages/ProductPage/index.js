import { DetailedLayout } from "../../components/MainLayout";

export default function ProductPage() {
  return (
    <DetailedLayout
      path={[
        { name: "Home", link: "/" },
        { name: "Product", link: "/" },
        { name: "Analogue Resin Strap" },
      ]}
    ></DetailedLayout>
  );
}
