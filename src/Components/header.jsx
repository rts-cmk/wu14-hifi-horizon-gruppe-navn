import { Link } from "react-router";
import "../Style/header.sass";
import CartSvg from "./cartSvg";
import ProfileSvg from "./profileSvg";

function Header() {
  return (
    <div className="headerDiv">
      <span className="headerSpan1">
        <img src="./public/HIFILogo.png" alt="" />
        <Link className="cap font-fam">Shop</Link>
        <Link className="cap font-fam">About us</Link>
        <Link className="cap font-fam">Contact us</Link>
      </span>
      <span className="headerSpan2">
        <input type="text" placeholder="Search product..." />
        <button><img src="./profile.svg" alt="" /></button>
        <button><img src="./cart.svg" alt="" /></button>
      </span>
    </div>
  );
}

export default Header;
