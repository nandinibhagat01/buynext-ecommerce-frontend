import { useSelector } from "react-redux";
import CartCard from "../Cart/CartCard";
import OrderSummary from "../Cart/OrderSummary";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = cartItems.indexOf(item.id);
    return itemIndex >= 0;
  });
  return (
    <>
      <div className="container py-4">
        <div className="row">
          {/* LEFT*/}
          <div className="col-lg-8">
            {finalItems.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>

          {/* RIGHT*/}
          <div className="col-lg-4">
            <div style={{ position: "sticky", top: "90px" }}>
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;

/*  const finalItems = items.filter(item =>
    cartItems.includes(item.id)
  ); */
