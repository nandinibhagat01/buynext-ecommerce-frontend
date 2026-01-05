const LoadingSpinner = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "5rem", height: "5rem", margin:"300px"}}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default LoadingSpinner;