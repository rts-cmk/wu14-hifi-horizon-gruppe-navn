import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import "../style/details.sass";

function DetailsPage() {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, [title]);

  const fetchProduct = async () => {
    try {
      const response = await fetch("https://lukuv.github.io/hifi-data/products.json");
      const data = await response.json();
      const foundProduct = data.find((p) => p.Title === title);
      setProduct(foundProduct);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (!product)
    return (
      <div>
        Product not found{" "}
        <Link className="orangeButton" to="/ProductPage">
          Go back
        </Link>
      </div>
    );

  return (
    <div>
      <Header />
      <PhoneMenu />
      <Link className="ProductBackLink" to="/ProductPage">
        <h1 className="font-fam cap ProductH1">Product</h1>
      </Link>
      <div className="productWrapper">
        <img
          className="productImage"
          src={product.img_url}
          alt={product.title}
        />
        <span className="productTextSpan">
          <h2 className="productH2">{product.product_title}</h2>
          <p className="productShortDescription productDescrition">
            {product.short_description}
          </p>
          <br />
          <p className="productLongDescription productDescrition">
            {product.long_description}
          </p>
          <div style={{ display: "flex", gap: "8px" }}>
            {product.colors.map((color, index) => (
              <div className="productColorDiv">
                <span
                  key={index}
                  title={color}
                  className="productColorSpan"
                  style={{ backgroundColor: color }}
                ></span>
                <p>{color}</p>
              </div>
            ))}
          </div>

          <span className="between align-center">
            <p className="detail_price">Pris: £{product.price}</p>
            <p className="flex" style={{ gap: "5px" }}>
              {product.stock_status}
              <div className={`${product.stock_status_color}`}></div>
            </p>
          </span>
          <div className="quantity">
            <div className="productCount">
              <button
                className="upCount"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                className="upCount"
                onClick={() => setQuantity((q) => q + 1)}
              >
                +
              </button>
            </div>
            <button className="productKnap"> Add to cart</button>
          </div>
        </span>
      </div>
      <hr/>
      <Footer />
    </div>
  );
}

export default DetailsPage;
