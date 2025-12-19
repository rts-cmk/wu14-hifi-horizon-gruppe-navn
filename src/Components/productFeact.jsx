import { useEffect, useState } from "react";
import "../Style/productFeact.sass";
import { Link } from "react-router";

function ProductFeact() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://lukuv.github.io/hifi-data/products.json"
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="productFeactContainer">
      {products.map((product) => (
        <div key={product.Title} className="product-card">
          <p className="uppercase right font-fam">
            {" "}
            compare
            <img className="compareImage" src="./public/sliders.png" alt="" />
          </p>
          <img
            className="productImage"
            src={product.img_url}
            alt={product.Title + " Billed"}
          />
          <span>
            <h3 className="uppercase">{product.Title}</h3>
            <p>{product.short_description}</p>
            <p className="font-fam">£ {product.price}</p>
            <div>
              <Link
                style={{ maxWidth: "128px" }}
                className="orangeButton"
                to={`/details/${product.Title}`}
              >
                Add to cart
              </Link>
              <div
                className="stockLevel uppercase flex align-center"
                style={{ gap: "5px" }}
              >
                {product.stock_status}
                <div className={product.stock_status_color}></div>
              </div>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductFeact;
