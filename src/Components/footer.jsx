import { Link } from "react-router";
import "../Style/footer.sass";
import PhoneSvg from "./phoneSvg";
import FacebookSvg from "./facebookSvg";
import TwitterSvg from "./twitterSvg";
import InstagramSvg from "./instagramSvg";
import YoutubeSvg from "./youtubeSvg";

function Footer() {
  return (
    <div className="footerDiv">
      <section className="footerSec1">
        <span className="footerSpan1">
          <Link to="/">Home</Link>
          <Link to="/ProductPage">Shop</Link>
          <Link to="/AboutPage">About Us</Link>
        </span>
        <span className="footerSpan2">
          <Link>Return & Refunds</Link>
          <Link>Delivery</Link>
          <Link>Privacy Policy</Link>
          <Link>Terms & Conditions</Link>
        </span>
        <span className="footerSpan3">
          <p>Contact</p>
          <address>2 Joppa Rd, Edinburgh, EH15 2EU</address>
          <span>
            <PhoneSvg />
            <p className="footerSpan1">0131 556 7901</p>
          </span>

          <address>44 Cow Wynd, Falkirk, Central Region, FK1 1PU</address>
          <span>
            <PhoneSvg />
            <p className="footerSpan1">01324 629 011</p>
          </span>
          <span>
            <FacebookSvg />
            <TwitterSvg />
            <InstagramSvg />
            <YoutubeSvg />
          </span>
        </span>
      </section>
      <hr />
    </div>
  );
}

export default Footer;
