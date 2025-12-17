import { useEffect, useState } from "react";
import "../Style/productFeact.sass";
import { Link } from "react-router";

function PopularProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    try {
      const response = await fetch("/products.json");
      const data = await response.json();

      // 🔥 Filtrer kun produkter med popular === true
      const popularProducts = data.filter(
        (product) => product.popular === true
      );

      setProducts(popularProducts);
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
          <img
            className="productImage"
            src={product.img_url}
            alt={product.Title + " Billed"}
          />

          <span>
            <h3 className="uppercase">{product.Title}</h3>
            <p>{product.short_description}</p>
            <p className="font-fam">£ {product.price}</p>
            <Link to={`/Details/${product.Title}`}>
              <button className="orangeButton">Add to cart</button>
            </Link>
          </span>
        </div>
      ))}
    </div>
  );
}

export default PopularProducts;
