import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import PopularProducts from "../Components/popularProducts";
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
            <Link to="/ProductPage">Se alle produkter</Link>
          </button>
        </span>
        <span className="PopularSpan">
          <PopularProducts />
        </span>
      </section>
      <article className="article1">
        <span className="article1Span1">
          <h2>What we do</h2>
          <p>We look forward to customising a system to meet your needs.</p>
          <p>
            We don’t favour one manufacturer over another – the only thing we do
            favour is making sure our customers get the right product that suits
            their needs and listening preferences. We will ask many questions in
            order to ensure that what you buy from us is tailored to you and you
            alone.
          </p>
          <p>
            If you are looking for a product not found in our demonstration
            showrooms or our online site, don’t fret as we have access to
            hundreds of brands.
          </p>
          <p>
            One of our biggest pleasures of working in this industry is to see
            the smile on our customers’ faces when they finally hear and see the
            system of their dreams.
          </p>
        </span>
        <span className="article1Span2">
          {" "}
          <h2>Opening hours</h2>
          <h3>Edinburgh</h3>{" "}
          <p>
            2 Joppa Rd,Edinburgh, EH15 2EU Monday to Friday: 10:00am - 5:30pm
            Saturday: 10:00am - 5:30pm Sunday: Closed
          </p>
          <h3>Falkirk</h3>
          <p>
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU Monday to Friday:
            10:00am - 5:30pm Saturday - By appointment only Sunday: Closed
          </p>
        </span>
      </article>
      <div className="signupDiv">
        <span>
          <h2 className="cap font-fam">Sign up for out Newsletter</h2>
          <p>
            Subscribing to our newsletter secures you up to date information
            about HiFi Horizons latest updates and offers.
          </p>
        </span>
        <form>
          <input type="email" />{" "}
          <button className="orangeButton">Sign up</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default FrontPage;
