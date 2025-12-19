import { useState } from "react";
import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import ProductFeact from "../Components/productFeact.jsx";
import "../Style/productPage.sass";

function ProductPage() {
  const [value, setValue] = useState(2000);
  const [openSections, setOpenSections] = useState([]); // Flere sektioner kan være åbne

  const handleChange = (e) => {
    setValue(Number(e.target.value));
  };

  const handleToggle = (section) => {
    if (openSections.includes(section)) {
      // Luk sektionen
      setOpenSections(openSections.filter((s) => s !== section));
    } else {
      // Åbn sektionen
      setOpenSections([...openSections, section]);
    }
  };

  return (
    <div className="productPageDiv">
      <Header />
      <PhoneMenu />
      <h1 className="cap font-fam">Products</h1>
      <span className="indeholdProductPage">
        <span className="foldOutWrapper">
          <h3>Sort by</h3>
          {/* Brand */}
          <div className="foldOutDiv">
            <div
              className="foldOutHeader"
              onClick={() => handleToggle("brand")}
              style={{ cursor: "pointer" }}
            >
              Brand
              <img
                src="./public/chevron-down.svg"
                alt=" Chevron Svg"
                title="Easter Egg #1"
              />
            </div>
            <div
              className={`foldOutText ${
                openSections.includes("brand") ? "open" : ""
              }`}
            >
              <label>
                Steelseries{" "}
                <input
                  type="checkbox"
                  value="checkbox"
                  name="Brand"
                  id="Steelseries"
                />
              </label>
              <label>
                Logitech{" "}
                <input
                  type="checkbox"
                  value="checkbox"
                  name="Brand"
                  id="Logitech"
                />
              </label>
              <label>
                Apple{" "}
                <input
                  type="checkbox"
                  value="checkbox"
                  name="Brand"
                  id="Apple"
                />
              </label>
            </div>
          </div>

          {/* Color */}
          <div className="foldOutDiv">
            <div
              className="foldOutHeader"
              onClick={() => handleToggle("color")}
              style={{ cursor: "pointer" }}
            >
              Color
              <img src="./public/chevron-down.svg" alt="Chevron Svg" />
            </div>
            <div
              className={`foldOutText ${
                openSections.includes("color") ? "open" : ""
              }`}
            >
              <label>
                White{" "}
                <input
                  type="checkbox"
                  value="checkbox"
                  name="Color"
                  id="White"
                />
              </label>
              <label>
                Black{" "}
                <input
                  type="checkbox"
                  value="checkbox"
                  name="Color"
                  id="Black"
                />
              </label>
              <label>
                Grey{" "}
                <input
                  type="checkbox"
                  value="checkbox"
                  name="Color"
                  id="Grey"
                />
              </label>
            </div>
          </div>

          {/* Price */}
          <div className="foldOutDiv">
            <div
              className="foldOutHeader"
              onClick={() => handleToggle("price")}
              style={{ cursor: "pointer" }}
            >
              Price
              <img src="./public/chevron-down.svg" alt="Chevron svg" />
            </div>
            <div
              className={`foldOutText ${
                openSections.includes("price") ? "open" : ""
              }`}
            >
              <label>Price: {value}</label>
              <input
                min={2000}
                max={12000}
                type="range"
                name="Price"
                id="Price"
                value={value}
                onChange={handleChange}
              />
            </div>
          </div>
        </span>
        <ProductFeact />
      </span>
      <Footer />
    </div>
  );
}

export default ProductPage;
