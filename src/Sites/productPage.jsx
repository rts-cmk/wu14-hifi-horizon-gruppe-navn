import { useEffect } from "react";
import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import ProductFeact from "./productFeact";
import "../Style/productPage.sass";

function ProductPage() {
  return (
    <div className="productPageDiv">
      <Header />
      <PhoneMenu />
      <h1 className="cap font-fam">Products</h1>
      <span className="indeholdProductPage">
        <h3>Sort by</h3>
        <div>
          <div className="panel">
            <p>
              <form action="/">
                <label htmlFor="">Black</label>
                <input type="radio" name="Hallo" id="Hallo" />
                <label htmlFor="">White</label>
                <input type="radio" name="" id="" />
                <label htmlFor="">Red</label>
                <input type="radio" name="" id="" />
              </form>
            </p>
          </div>
        </div>
        <ProductFeact />
      </span>
      <Footer />
    </div>
  );
}

export default ProductPage;
