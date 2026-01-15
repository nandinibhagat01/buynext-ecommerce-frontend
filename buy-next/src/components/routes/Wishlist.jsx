import { useSelector } from "react-redux";
import ProductCard from "../Body/ProductCard";

const Wishlist = () => {
  const wishlistIds = useSelector((state) => state.wishlist);
  const items = useSelector((state) => state.items)

  const wishlistItems = items.filter((item) => wishlistIds.includes(item.id));

  return (
    <>
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {wishlistItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Wishlist;
