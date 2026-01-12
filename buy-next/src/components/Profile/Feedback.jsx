const FeedBack = () => {
  return (
    <>
      <div className="list-group">
        <h5>Feedback and Information</h5>

        <a
          href="/"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://github.com/twbs.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Terms of Use</h6>
              <p className="mb-0 opacity-75">Read Terms and Conditions.</p>
            </div>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://github.com/twbs.png"
            alt=""
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">FAQs</h6>
              <p className="mb-0 opacity-75">
                View Frequently Asked Questions.
              </p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
export default FeedBack;
