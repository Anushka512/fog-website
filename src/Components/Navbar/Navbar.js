
import Logo from "../../Assets/Images/logo__sec.png";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";
import "./Navbar.scss";

export default function Navbar({setToggleCart}) {
  return (
    <div className="wrapper__nav">
      <div className="socials__nav">
        <div className="social__icon">
          <BsFacebook />
          <BsInstagram />
          <BsTwitter />
        </div>

        <p className="p-text">
          Sale: 20% off on orders above ₹999. Valid until 22nd April only.
        </p>
      </div>
      <nav className="navbar-items">
        <div className="container nav__container">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul>
            {["Home", "About Us", "Blog", "Contact Us"].map((item, id) => (
              <li key={item - id}>
                <a href={`#${item}`}>{item}</a>
              </li>
            ))}
          </ul>
          <div className="right">
            <AiOutlineShoppingCart onClick={setToggleCart} />
            <AiOutlineHeart />
            <div className="auth">
              <button className="btn cart">Login/Signup</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
