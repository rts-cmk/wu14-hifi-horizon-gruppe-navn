import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import "../Style/frontPage.sass";
import { Link } from "react-router";

function FrontPage() {
  return (
    <div className="frontPageDiv">
      <Header />
      <PhoneMenu />
      <img
        className="FrontPageImage1"
        src="./public/frontPageImage.jpg"
        alt=""
      />
      <section>
        <span className="spaceBetween">
          <h1>Popular Products</h1>
          <button className="orangeButton">
            <Link>Se alle produkter</Link>
          </button>
        </span>
      </section>
      <Footer />
    </div>
  );
}

export default FrontPage;
