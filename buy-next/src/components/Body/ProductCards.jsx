import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";



const ProductCards = () => {

  const items = useSelector((store) => store.items);
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductCards;
