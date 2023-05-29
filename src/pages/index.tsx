import Carousel from "~/components/carousel";
import { dark } from "~/styles/palette";
import useFetcher from "~/hooks/fetcher";
import IProduct from "~/types/product";

export default function Home() {
  const { data: productData, error } = useFetcher<IProduct[]>("/api/product");
  console.log(productData);

  if (!productData) {
    return <>Error</>;
  }
  return (
    <div style={{ minHeight: "100vh" }}>
      <Carousel productData={productData} />
    </div>
  );
}
