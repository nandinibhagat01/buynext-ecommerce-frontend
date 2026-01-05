import CartCard from "../Cart/CartCard";
import OrderSummary from "../Cart/OrderSummary";

const Cart = () => {
  return(
    <>
    <div className="container py-4">
      <div className="row">

        {/* LEFT: Cart Items (Scrollable) */}
        <div className="col-lg-8">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>

        {/* RIGHT: Order Summary (Sticky) */}
        <div className="col-lg-4">
          <div style={{ position: "sticky", top: "90px" }}>
            <OrderSummary />
          </div>
        </div>

      </div>
    </div>
    </>
  )
};
export default Cart;
