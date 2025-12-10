import Footer from "../Components/footer";
import Header from "../Components/header";
import "../Style/frontPage.sass";

function FrontPage() {
  return (
    <div className="frontPageDiv">
      <Header />
      <img
        className="FrontPageImage1"
        src="./public/frontPageImage.jpg"
        alt=""
      />
      <section>
        <span className="spaceBetween">
        <h1>Popular Products</h1>
<button>See all products</button>
        </span>
      </section>
      <Footer />
    </div>
  );
}

export default FrontPage;
