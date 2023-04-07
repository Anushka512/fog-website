// import '../style.css';
// import {link} from "react-router-dom"
import Logo from "../../Assets/Images/Group.png";
import User from "../../Assets/Images/Ellipse 6.png";
import "./Navbar.scss";

export default function Navbar() {
  return (
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
          <a className="btn cart">Your Cart</a>
          <a className="btn wishlist">Wish List</a>
          <div className="profile">
            <img src={User} alt="userProfile" />
          </div>
        </ul>
      </div>
    </nav>
  );
}
