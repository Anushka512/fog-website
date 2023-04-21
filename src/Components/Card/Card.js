import React from "react";
import Span from "../../Assets/Images/span.veg.png";
import "./Card.scss";
// import { AiOutlineHeart, AiFillCheckCircle } from "react-icons/ai";

function Card({ imgUrl, name, price, salePrice , category }) {
  return (
    <div className="Card">
      <div className="top__bar">
        <p>20% OFF</p>
        <img src={Span} alt="Span" />
      </div>
      <div className="card__img flex__center">  
        <img src={imgUrl} alt="product" />
      </div>
      <div className="bottom__bar">
        <div className="card__info">
          <span>{category}</span>
          <h3>{name}</h3>
        </div>

        <div className="card__desc">
          <span className="card__price">
          <p className="price">
            ₹{price}
          </p>
          <p className="sale__price">
            ₹{salePrice}
          </p>
          </span>

          <button className="btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
