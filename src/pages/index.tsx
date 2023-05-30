import useFetcher from "~/hooks/fetcher";
import Carousel from "~/components/carousel";
import { dark } from "~/styles/palette";
import IProduct from "~/types/product";
import Spinner from "~/components/spinner";
import ProductCarousel from "~/components/product-carousel";

export default function Home() {
  const {
    data: productData,
    isLoading,
    error,
    isValidating,
  } = useFetcher<IProduct[]>("/api/products");
  console.log("something", productData);

  return (
    <div className="home-page">
      <div style={{ minHeight: "100vh" }}>
        {productData ? (
          <Carousel productData={productData} />
        ) : isLoading || isLoading ? (
          <Spinner />
        ) : (
          <>Error</>
        )}
      </div>
      <div>
        <ProductCarousel />
      </div>
    </div>
  );
}
