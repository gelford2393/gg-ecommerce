import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Products from "./pages/Products";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductView from "./pages/ProductView";

const App = () => {
  return (
    <Router>
      <nav style={{ padding: 10 }}>
        <Link to="/" style={{ marginRight: 10 }}>
          Products
        </Link>
        <Link to="/about" style={{ marginRight: 10 }}>
          About
        </Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductView />} />
      </Routes>
    </Router>
  );
};

export default App;
