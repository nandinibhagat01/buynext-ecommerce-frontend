import { useSelector } from "react-redux";

const OrderSummary = () => {
  const cartItemIds = useSelector((state) => state.cart);
  const items = useSelector((state) => state.items);
  const finalItems = items.filter((item) => {
    const itemIndex = cartItemIds.indexOf(item.id);
    return itemIndex >= 0;
  });

  let Total = 0;
  //let TotalDiscount=0;
  finalItems.forEach((cartItem) => {
    Total += cartItem.price;
    // TotalDiscount= cartItem.price-cartItem.current_price;
  });
  //let finalPayment=Total-TotalDiscount+ CONVENIENCE_FEES
  return (
    <>
      <div>
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Items {cartItemIds.length}</span>
              <span>₹{Total}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Delivery</span>
              <span className="text-success">Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>₹{Total}</span>
            </div>

            <button className="btn btn-warning w-100 fw-bold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderSummary;
