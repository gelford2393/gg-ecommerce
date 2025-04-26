import { useParams } from "react-router-dom";
import { products } from "../../__mocks__/products";

const ProductView = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <div style={{ padding: "2rem" }}>Product not found.</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{product.name}</h1>
      <img
        src={product.imageUrl}
        alt={product.name}
        style={{ width: "300px", height: "300px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <h2>₱{product.price}</h2>

      <button
        className="btn btn-primary mt-3"
        onClick={() => alert("Add to cart clicked!")}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductView;
