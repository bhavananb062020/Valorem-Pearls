import { type FC } from "react";
import { useParams } from "react-router-dom";

const ProductDetails: FC = () => {
  const { productId } = useParams();

  return <>ProductDetails: {productId}</>;
}

export default ProductDetails;