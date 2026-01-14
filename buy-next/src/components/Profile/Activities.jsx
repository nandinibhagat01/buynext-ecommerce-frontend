const Activities = () => {
  return (
    <>
      <div className="list-group">
        <h5>My Activities</h5>

        <a
          href="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="/Profile/order.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">My Orders</h6>
              <p className="mb-0 opacity-75">
                View Your Orders.
              </p>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="/Profile/wishlist.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Wishlist</h6>
              <p className="mb-0 opacity-75">View your favourite products.</p>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="/Profile/review.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">My Reviews</h6>
              <p className="mb-0 opacity-75">Edit Reviews of the products you bought.</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default Activities;
