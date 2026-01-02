import ProductCardData from "./ProductCardData";
import ProductCard from "./ProductCard";

const ProductCards = () => {
  return (
    <>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {ProductCardData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
export default ProductCards;
