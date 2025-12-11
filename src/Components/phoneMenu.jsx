import "../Style/phoneMenu.sass";
import { useState } from "react";
import { Link } from "react-router";

function PhoneMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="phoneMenuDiv">
      <button>
        <svg
          className="svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.4973 19.0632L16.3539 13.9204C17.5235 12.1842 18.1006 10.0149 17.7917 7.70346C17.2649 3.77181 14.0422 0.572268 10.1062 0.0740125C4.2543 -0.666389 -0.666497 4.25387 0.0740287 10.1052C0.572468 14.0424 3.77279 17.2673 7.70531 17.7914C10.017 18.1003 12.187 17.5235 13.9229 16.3539L19.0663 21.4967C19.7375 22.1678 20.8259 22.1678 21.497 21.4967C22.1676 20.8247 22.1676 19.7334 21.4973 19.0632ZM3.39879 8.93653C3.39879 5.90412 5.86607 3.43712 8.89881 3.43712C11.9316 3.43712 14.3988 5.90412 14.3988 8.93653C14.3988 11.9689 11.9316 14.4359 8.89881 14.4359C5.86607 14.4359 3.39879 11.9698 3.39879 8.93653Z"
            fill="white"
          />
        </svg>
      </button>
      <button>
        <svg
          className="svg"
          width="22"
          height="22"
          viewBox="0 0 49 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.5 28.0016C32.2328 28.0016 38.5 21.733 38.5 14.0008C38.5 6.26865 32.2328 0 24.5 0C16.7672 0 10.5 6.26865 10.5 14.0008C10.5 21.733 16.7672 28.0016 24.5 28.0016ZM30.0453 33.2519H18.9547C8.48859 33.2519 0 41.7399 0 52.2077C0 54.3013 1.6975 56 3.79094 56H45.2113C47.3047 56.0033 49 54.3079 49 52.2077C49 41.7399 40.5125 33.2519 30.0453 33.2519Z"
            fill="#F4F4F2"
          />
        </svg>
      </button>
      <button>
        <svg
          className="svg"
          width="29.42"
          height="26"
          viewBox="0 0 55 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.20253 0C10.3049 0 11.2539 0.783809 11.4648 1.86717L11.6086 3.0625H51.9368C53.8827 3.0625 55.4356 5.00049 54.8892 6.95379L49.7128 25.3326C49.339 26.6533 48.1311 27.5625 46.7603 27.5625H16.3632L17.2452 32.1562H46.7795C48.0545 32.1562 49.0802 33.1803 49.0802 34.4531C49.0802 35.726 48.0545 36.75 46.7795 36.75H15.2513C14.2352 36.75 13.2861 35.9652 13.0753 34.8838L7.29876 4.59375H2.30063C1.03049 4.59375 0 3.56494 0 2.29688C0 1.02881 1.03049 0 2.30063 0H9.20253ZM12.27 44.4062C12.27 41.8701 14.331 39.8125 16.8713 39.8125C19.4116 39.8125 21.4726 41.8701 21.4726 44.4062C21.4726 46.9424 19.4116 49 16.8713 49C14.331 49 12.27 46.9424 12.27 44.4062ZM49.0802 44.4062C49.0802 46.9424 47.0192 49 44.4789 49C41.9386 49 39.8776 46.9424 39.8776 44.4062C39.8776 41.8701 41.9386 39.8125 44.4789 39.8125C47.0192 39.8125 49.0802 41.8701 49.0802 44.4062Z"
            fill="#F4F4F2"
          />
        </svg>
      </button>
      <button className="burgerMenu" onClick={toggleMenu}>
        <svg
          className="svg lucide lucide-menu-icon lucide-menu"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 5h16" />
          <path d="M4 12h16" />
          <path d="M4 19h16" />
        </svg>
      </button>
      <div
        id="burgerMenuDiv"
        className="burgerMenuDiv"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        <Link to="/" className="cap font-fam"><img src="./HIFILogo.png" alt="" /></Link>
        <Link to="/ProductPage" className="cap font-fam">Shop</Link>
        <Link to="/AboutPage" className="cap font-fam">About us</Link>
        <Link to="/ContactPage"className="cap font-fam">Contact us</Link>
      </div>
    </div>
  );
}

export default PhoneMenu;
// ...existing code...
