import { Link, NavLink } from "react-router";
import "../Style/header.sass";
import CartSvg from "./cartSvg";
import ProfileSvg from "./profileSvg";

function Header() {
  return (
    <div className="headerDiv">
      <span className="headerSpan1">
        <NavLink to="/">
          <img src="/HIFILogo.png" alt="" />
        </NavLink>
        <NavLink to="/ProductPage" className="cap font-fam">
          Shop
        </NavLink>
        <NavLink to="/AboutPage" className="cap font-fam">
          About us
        </NavLink>
        <NavLink to="/ContactPage" className="cap font-fam">
          Contact us
        </NavLink>
      </span>
      <span className="headerSpan2">
        <input type="text" placeholder="Search product..." />
        <button>
          <img src="/profile.svg" alt="" />
        </button>
        <button>
          <img src="/cart.svg" alt="" />
        </button>
      </span>
    </div>
  );
}

export default Header;
