import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="px-4 pt-5 my-5 text-center border-bottom"
        style={{ height: "650px" }}
      >
        <h1 className="display-4 fw-bold text-body-emphasis text-purple-700">
          Your Cart is Empty
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Shop today's deal</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
            <button
              type="button"
              className="btn btn-lg px-4 me-sm-3 text-white bg-purple-400"
              fdprocessedid="qtrgoi"
              onClick={() => {
                navigate("/");
              }}
            >
              Shop now
            </button>
            <button
              type="button"
              className="btn text-white btn-lg px-4 bg-pink-400"
              fdprocessedid="fqnlnn"
              onClick={()=>navigate("/Profile")}
            >
              Visit Profile
            </button>
          </div>
        </div>
        <div className="overflow-hidden" style={{ maxHeight: "800px" }}>
          <div className="container px-5">
            <img
              src="cart.png"
              className="img-fluid mb-4"
              alt="Example image"
              width="300"
              height="800"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default EmptyCart;
