
import Carousel from "~/components/carousel";
import { dark } from "~/styles/palette";
import IProduct from "~/types/product";
import Spinner from "~/components/spinner";
import ProductCarousel from "~/components/product-carousel";
import { useGetRequest } from "~/hooks/fetcher";

export default function Home() {
  const { data: productData } = useGetRequest<IProduct[]>("/api/products/")

  return (
    <div style={{ minHeight: "100vh" }}>
      {productData?(
        <Carousel productData={productData} />
      ):(<>Error</>)}
    </div>
  );
}
