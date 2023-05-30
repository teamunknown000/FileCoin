import useFetcher from "~/hooks/fetcher";
import Carousel from "~/components/carousel";
import { dark } from "~/styles/palette";
import IProduct from "~/types/product";

export default function Home() {
  const { data: productData, isLoading } = useFetcher<IProduct[]>("/api/products")
  console.log("something", productData)
  if (!productData) {
    return <>Error</>;
  }
  return (
    <div style={{ minHeight: "100vh" }}>
      <Carousel productData={productData} />
    </div>
  );
}
