import Footer from "../Components/footer";
import Header from "../Components/header";
import PhoneMenu from "../Components/phoneMenu";
import "../Style/ContactPage.sass";

function ContactPage() {
  return (
    <div className="contactPageDiv">
      <Header />
      <PhoneMenu />
      <div className="contactDiv">
        <h1 className="cap font-fam">Get in touch with us</h1>
        <form action="thanks" className="contactForm">
          <label htmlFor="FullName">
            Full name
            <span className="redColor" title="Required">
              {" "}
              *{" "}
            </span>
          </label>
          <input type="text" required />
          <label htmlFor="Email">
            Email
            <span className="redColor" title="Required">
              {" "}
              *{" "}
            </span>
          </label>
          <input type="Email" required />
          <label htmlFor="Subject">
            Subject
            <span className="redColor" title="Required">
              {" "}
              *{" "}
            </span>
          </label>
          <input type="text" required />
          <label htmlFor="Message">
            Message{" "}
            <span className="redColor" title="Required">
              {" "}
              *{" "}
            </span>
          </label>
          <textarea
            name="Message"
            required
            rows="6"
            cols="10"
            id="Message"
          ></textarea>
          <button className="orangeButton">Submit</button>
        </form>
        <p className="font-fam">
          Visit our sister companies{" "}
          <span className="orangeColor">Home Sound </span>
          and <span className="orangeColor"> The Movie Rooms </span>part of the
          HiFi Horizon Group.{" "}
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default ContactPage;
