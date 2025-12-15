import { useEffect, useState } from "react";
import "../Style/productFeact.sass";

function ProductFeact() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("/products.json");
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
            <button className="orangeButton">Add to cart</button>
          </span>
        </div>
      ))}
    </div>
  );
}

export default ProductFeact;
