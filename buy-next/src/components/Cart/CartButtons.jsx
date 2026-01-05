const CardButtons = () => {
  return (
    <>
      <div className="col-md-3">
        <div className="d-grid gap-2 p-3">
          <button
            className="btn btn-outline-primary rounded-pill"
            type="button"
          >
            Move to Wishlist
          </button>
          <button className="btn btn-outline-danger rounded-pill" type="button">
            See More Like This
          </button>
          <button className="btn btn-primary rounded-pill" type="button">
            Buy Now
          </button>
          <button className="btn btn-primary rounded-pill" type="button">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default CardButtons;
