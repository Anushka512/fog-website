import React, { Fragment } from "react";
import Banner from "../../Assets/Images/Banner__IMG.png";
import CardImg from "../../Assets/Images/3.jpg.png";
import rowIMG from "../../Assets/Images/div.row.png";
import Card from "../../Components/Card/Card.js";

import "./Home.scss";

function Home() {
  return (
    <Fragment>
      <div className="banner">
        <div className="container hero__container">
          <div className="home__h-img">
            <img src={Banner} alt="HERO__IMG" />
          </div>
          <div className="home__h-info">
            <h1>
              <span>It’s not a dream. </span>Gluten Free is finally real!
            </h1>
            <p className="p-text">
              lorem ipsum wjaksljdasj klasjdalks dklajsdlkasj jdlkasjdlaksj
              jakljda daskjdjakld klasdjaskld{" "}
            </p>
            <button className="btn cart">Shop Now</button>
          </div>
        </div>
      </div>

      {/* {---------------------SERVICE SECTION START----------------------------} */}

      <div className="services__option">
        <div className="ser ser-1">
          <p>
            <i class="fa-regular fa-truck-fast"></i>
          </p>
          <h4>Free Delivery</h4>
          <p className="desc">on orders above ₹999</p>
        </div>

        <div className="ser ser-2">
          <p>
            <i class="fa-regular fa-truck-fast"></i>
          </p>
          <h4>Free Delivery</h4>
          <p className="desc">on orders above ₹999</p>
        </div>

        <div className="ser ser-3">
          <p>
            <i class="fa-regular fa-truck-fast"></i>
          </p>
          <h4>Free Delivery</h4>
          <p className="desc">on orders above ₹999</p>
        </div>
      </div>

      {/* {---------------------SERVICE SECTION END----------------------------} */}

      {/* {---------------------CARD SECTION START----------------------------} */}
      <article className="products">
        <div className="container products__container">
          <h3 className="popular__product">
            Popular From The Menu <span>20% OFF</span>{" "}
          </h3>
          <div className="products__cards">
            <Card imgUrl={CardImg} name={"Veg. Pasta Arabia"} price={"150"} />
            <Card imgUrl={CardImg} name={"Veg. Pasta Arabia"} price={"150"} />
            <Card imgUrl={CardImg} name={"Veg. Pasta Arabia"} price={"150"} />
          </div>

          <h3 className="feature__product">
            Feature From The Menu <span>20% OFF</span>{" "}
          </h3>
          <div className="products__cards">
            <Card imgUrl={CardImg} name={"Veg. Pasta Arabia"} price={"150"} />
            <Card imgUrl={CardImg} name={"Veg. Pasta Arabia"} price={"150"} />
            <Card imgUrl={CardImg} name={"Veg. Pasta Arabia"} price={"150"} />
          </div>
        </div>
      </article>

      {/* {---------------------CARD SECTION END----------------------------} */}

      {/* {---------------------MENU SECTION START----------------------------} */}

      <div className="div__row-img">
        <img src={rowIMG} alt="ROW__IMG" />
      </div>
    </Fragment>
  );
}

export default Home;
