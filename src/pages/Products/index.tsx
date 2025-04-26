import { useCallback, useMemo } from "react";
import { products } from "../../__mocks__/products";
import ProductCard from "../../components/ProductCard";
import { IProduct } from "../../types/product";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const onViewProduct = useCallback((product: IProduct) => {
    navigate(`/product/${product.id}`);
  }, []);

  const productsList = useMemo(() => {
    return products.map((product) => (
      <div key={product.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
        <ProductCard product={product} onViewProductCallback={onViewProduct} />
      </div>
    ));
  }, [onViewProduct]);

  return (
    <div className="container py-4">
      <h1 className="mb-4">Products</h1>
      <div className="row">{productsList}</div>
    </div>
  );
};

export default Products;
