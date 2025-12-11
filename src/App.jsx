import { Route, Routes, Link, NavLink } from "react-router";
import FrontPage from "./Sites/frontPage";
import ProductPage from "./Sites/productPage";
import AboutPage from "./Sites/aboutPage";
import ContactPage from "./Sites/contactPage"

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<FrontPage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/Aboutpage" element={<AboutPage />} />
        <Route path="/ContactPage" element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
