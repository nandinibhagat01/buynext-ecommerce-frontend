import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItemIds = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);

  const quantities = useSelector((state) => state.cartOperators.quantities);

  const finalItems = items.filter((item) => cartItemIds.includes(item.id));

  let Total = 0;
  let TotalDiscount = 0;
  finalItems.forEach((item) => {
    const qty = quantities[item.id] || 1;
    Total += item.price * qty;
    TotalDiscount = ((item.original_price * item.discount) / 100) * qty;
  });
  let finalPayment = Total - TotalDiscount;
  return (
    <>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="card-title mb-3">Order Summary</h5>

          <div className="d-flex justify-content-between mb-2">
            <span>Items ({cartItemIds.length})</span>
            <span>₹{Total.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Total Discount</span>
            <span>- ₹{TotalDiscount.toFixed(2)}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Delivery</span>
            <span className="text-success">Free</span>
          </div>

          <hr />

          <div className="d-flex justify-content-between fw-bold mb-3">
            <span>Total</span>
            <span>₹{finalPayment.toFixed(2)}</span>
          </div>

          <button className="btn  w-100 fw-bold text-light glow-btn">
            Proceed to Pay
          </button>
        </div>
      </div>
    </>
  );
};
export default OrderSummary;
