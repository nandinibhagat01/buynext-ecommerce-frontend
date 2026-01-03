import { IoSend } from "react-icons/io5";

const EmailConnect = () => {
  return (
    <>
      <form>
        <h5>Stay connected with us</h5>
        <p>
          Join the BuyNXT family and be the first one to know about the lastest
          offers, deals, sales, products and much more.
        </p>
        <div class="d-flex flex-column flex-sm-row w-100 gap-2">
          <label for="newsletter1" class="visually-hidden">
            Email address
          </label>
          <div className="input-group">
            <input
              id="newsletter1"
              type="email"
              class="form-control"
              placeholder="Your Email"
              fdprocessedid="51unq"
            />
            <button
              class="btn btn-primary"
              type="button"
              fdprocessedid="4yp1gc"
            >
              <IoSend />
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EmailConnect;
