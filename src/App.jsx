import { Route, Routes, Link, NavLink } from "react-router";
import FrontPage from "./Sites/frontPage";
import ProductPage from "./Sites/productPage";

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<FrontPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
