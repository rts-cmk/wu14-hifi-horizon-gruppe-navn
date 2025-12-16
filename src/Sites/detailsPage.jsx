import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import "../style/details.sass";

function DetailsPage() {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProduct();
  }, [title]);

  const fetchProduct = async () => {
    try {
      const response = await fetch("/products.json");
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
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <Header />
      <PhoneMenu />
      <h1 className="font-fam cap">Product</h1>
      <div className="productWrapper">
        <img src={product.img_url} alt={product.title} />
        <span className="productTextSpan">
          <h2>{product.product_title}</h2>
          <p>{product.short_description}</p>
          <br />
          <p>{product.long_description}</p>
          <p>Pris: £{product.price}</p>
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default DetailsPage;
