const OrderSummary = () => {
  return (
    <>
      <div>
        <div className="card shadow-sm">
          <div className="card-body">
            <h5 className="card-title mb-3">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Items (3)</span>
              <span>₹2,997</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Delivery</span>
              <span className="text-success">Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>₹2,997</span>
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
