const ProductCard = ({ product }) => {
  return (
    <div className="col">
      <div className="card h-100 shadow-sm">
        {/* FIX: Use product.image (from your data file) instead of a hardcoded string */}
        <img
          src={product.image} 
          className="card-img-top"
          alt={product.name}
          style={{ height: "225px", objectFit: "cover" }}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text text-muted">₹{product.price}</p>
          
          {/* mt-auto pushes the button to the bottom if names are different lengths */}
          <button className="btn btn-sm btn-outline-primary mt-auto">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
