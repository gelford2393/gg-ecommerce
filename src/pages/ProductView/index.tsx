import { useParams } from "react-router-dom";
import { products } from "../../__mocks__/products";

const ProductView = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <div style={{ padding: "2rem" }}>Product not found.</div>;
  }

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="img-fluid" // Bootstrap class for responsive image
            style={{ objectFit: "cover", maxHeight: "300px", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>₱{product.price}</h2>
          <button
            className="btn btn-primary mt-3"
            onClick={() => alert("Add to cart clicked!")}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
