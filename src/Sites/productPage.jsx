import { useEffect } from "react";
import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import ProductFeact from "../Components/productFeact.jsx";
import "../Style/productPage.sass";

function ProductPage() {
  return (
    <div className="productPageDiv">
      <Header />
      <PhoneMenu />
      <h1 className="cap font-fam">Products</h1>
      <span className="indeholdProductPage">
        <h3>Sort by</h3>
        <div className="panel">
          <input type="radio" name="Hallo" id="Hallo" />
          <label>White</label>
          <form action="/">
            <label>Black</label>
            <input type="radio" name="" id="" />
            <label>Red</label>
            <input type="radio" name="" id="" />
          </form>
        </div>
        <ProductFeact />
      </span>
      <Footer />
    </div>
  );
}

export default ProductPage;
