import React from "react";
import Span from "../../Assets/Images/span.veg.png";
import "./Card.scss";
import { AiOutlineHeart, AiFillCheckCircle } from "react-icons/ai";

function Card({ imgUrl, name, price }) {
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
        <h3>{name}</h3>
        <div className="card__info">
          <div className="info__desc">
            <AiFillCheckCircle />
            <p className="p-text">Available in - 500 gm</p>
          </div>
          <AiOutlineHeart style={{ cursor: "pointer" }} />
        </div>

        <div className="card__desc">
          <p>
            ₹{price}/kg
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.3125 3.79913C2.60417 3.79913 2.84375 3.70538 3.03125 3.51788C3.21875 3.33038 3.3125 3.09601 3.3125 2.81476C3.3125 2.53351 3.21875 2.29913 3.03125 2.11163C2.84375 1.92413 2.60938 1.83038 2.32812 1.83038C2.04688 1.83038 1.8125 1.92413 1.625 2.11163C1.4375 2.29913 1.34375 2.53351 1.34375 2.81476C1.34375 3.09601 1.4375 3.33038 1.625 3.51788C1.8125 3.70538 2.04167 3.79913 2.3125 3.79913ZM12.9375 6.86163C13.1875 7.11163 13.3125 7.42413 13.3125 7.79913C13.3125 8.17413 13.1875 8.48663 12.9375 8.73663L8.25 13.4241C8 13.6741 7.6875 13.7991 7.3125 13.7991C6.9375 13.7991 6.625 13.6741 6.375 13.4241L0.375 7.42413C0.125 7.17413 0 6.86163 0 6.48663V1.79913C0 1.42413 0.125 1.11163 0.375 0.861633C0.625 0.611633 0.9375 0.486633 1.3125 0.486633H6C6.375 0.486633 6.6875 0.611633 6.9375 0.861633L12.9375 6.86163ZM7.3125 12.4866L12 7.79913L6.3125 2.14288L1.65625 6.79913L7.3125 12.4866Z"
                fill="black"
                fill-opacity="0.6"
              />
            </svg>
          </p>

          <button className="btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
