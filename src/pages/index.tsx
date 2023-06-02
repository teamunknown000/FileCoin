
import Carousel from "~/components/carousel";
import { dark } from "~/styles/palette";
import IProduct from "~/types/product";
import Spinner from "~/components/spinner";

export default function Home() {
  const productData = [] as IProduct[]
  console.log("something", productData)

  return (
    <div style={{ minHeight: "100vh" }}>
      {productData?(
        <Carousel productData={productData} />
      ):(<>Error</>)}
    </div>
  );
}