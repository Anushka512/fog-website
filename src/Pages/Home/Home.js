import React, { Fragment, useState } from "react";
import Banner from "../../Assets/Images/Banner__IMG.png";
import CardImg from "../../Assets/Images/3.jpg.png";
import logoSec from "../../Assets/Images/logo__sec.png";
import aboutBanner from "../../Assets/Images/about__banner.png";
import rowIMG from "../../Assets/Images/div.row.png";
import Card from "../../Components/Card/Card.js";
import TestimonialCard from "../../Components/TestimonialCard/TestimonialCard.js";
import userImg from "../../Assets/Images/Ellipse 6.png";
import CategoryComp from "../../Components/CategoryComp/CategoryComp.js";
import PopularItem from "../../Components/PopularItem/PopularItem.js";
import dummyIMg from "../../Assets/Images/3.jpg.png";
import CatImg from "../../Assets/Images/cat-img.png";
import { FiTruck } from "react-icons/fi";
import { MdOutlineSupportAgent, MdPayments } from "react-icons/md";
import { BiTimer } from "react-icons/bi";

import "./Home.scss";

function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="Home">
      {/* {---------------------HERO SECTION START----------------------------} */}

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

      {/* {---------------------HERO SECTION END----------------------------} */}

      {/* {---------------------SERVICE SECTION START----------------------------} */}

      <div className="services__option">
        <div className="ser ser-1">
          <FiTruck />
          <h4>Free Delivery</h4>
          <p className="desc">on orders above ₹999</p>
        </div>

        <div className="ser ser-1">
          <BiTimer />

          <h4>Free Delivery</h4>
          <p className="desc">on orders above ₹999</p>
        </div>

        <div className="ser ser-2">
          <MdPayments />
          <h4>Free Delivery</h4>
          <p className="desc">on orders above ₹999</p>
        </div>

        <div className="ser ser-3">
          <MdOutlineSupportAgent />
          <h4>Free Delivery</h4>
          <p className="desc">on orders above ₹999</p>
        </div>
      </div>

      {/* {---------------------SERVICE SECTION END----------------------------} */}

      {/* {---------------------POPULAR-CATEGORY  SECTION START----------------------------} */}

      <div className="categories">
        <div className="categories__main container">
          <h2>Shop Popular Categories</h2>

          <div className="category__card-container">
            <CategoryComp imgUrl={dummyIMg} catName="Bread Buns" />
            <CategoryComp imgUrl={dummyIMg} catName="Bread Buns" />
            <CategoryComp imgUrl={dummyIMg} catName="Bread Buns" />
            <CategoryComp imgUrl={dummyIMg} catName="Bread Buns" />
            <CategoryComp imgUrl={dummyIMg} catName="Bread Buns" />
            <CategoryComp imgUrl={dummyIMg} catName="Bread Buns" />
          </div>

          <div className="category__popular-img">
            <PopularItem imgUrl={CatImg} />
            <PopularItem imgUrl={CatImg} />
            <PopularItem imgUrl={CatImg} />
            <PopularItem imgUrl={CatImg} />
          </div>
        </div>
      </div>

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

      <main>
        <div className="Menu">
          <div className="container menu__container">
            <h2 className="menu__head-sec">Fresh from Free of Gluten</h2>
            <h2 className="menu__head">OUR SPECIAL MENU</h2>

            <div className="menu__items flex__center">
              {["All", "Breads", "Cookies", "Snacks", "Desert", "Namkeen"].map(
                (elem, id) => (
                  <div
                    onClick={() => setActiveFilter(elem)}
                    className={`menu__item-filter-item flex__center p-text ${
                      activeFilter === elem ? "item-active" : ""
                    }`}
                    key={elem - id}
                  >
                    {elem}
                  </div>
                )
              )}
            </div>

            <div className="menu__cards-container flex__center">
              <Card name="Makkhan" price="120" imgUrl={CardImg} />
              <Card name="Makkhan" price="120" imgUrl={CardImg} />
              <Card name="Makkhan" price="120" imgUrl={CardImg} />
              <Card name="Makkhan" price="120" imgUrl={CardImg} />
              <Card name="Makkhan" price="120" imgUrl={CardImg} />
              <Card name="Makkhan" price="120" imgUrl={CardImg} />
            </div>
          </div>
        </div>
      </main>

      {/* {---------------------MENU SECTION END----------------------------} */}

      {/* {---------------------BANNER SECTION START----------------------------} */}

      <div className="About__Banner">
        <div className="container about__banner flex__center">
          <div className="left">
            <div className="about__logo">
              <img src={logoSec} alt="Company__logo" />
            </div>

            <div className="about__banner-info">
              <h3 className="ab-head-first">Delicious restaurant</h3>
              <h2 className="ab-head-sec">About Gluten Free</h2>
              <p className="p-text">
                The generated Lorem Ipsum is therefore always free from
                repetition injected humour, or non-characteristic words etc. The
                generated Lorem Ipsum is therefore always free from repetition
                injected humour, or non-characteristic words etc.
              </p>
              <button className="btn">Our Story</button>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={aboutBanner} alt="banner" />
        </div>
      </div>

      {/* {---------------------BANNER SECTION END----------------------------} */}

      {/* {---------------------TESTIMONIALS SECTION START----------------------------} */}

      <div className="Testimonials">
        <h2>
          What <span>people say</span> about us
        </h2>
        <div className="container testimonials__container flex__center">
          <TestimonialCard
            imgUrl={userImg}
            name="Deepak"
            desc="The generated Lorem Ipsum is therefore always free from a dummy text, generated text."
          />

          <TestimonialCard
            imgUrl={userImg}
            name="Deepak"
            desc="The generated Lorem Ipsum is therefore always free from a dummy text, generated text."
          />

          <TestimonialCard
            imgUrl={userImg}
            name="Deepak"
            desc="The generated Lorem Ipsum is therefore always free from a dummy text, generated text."
          />
        </div>
      </div>

      {/* {---------------------TESTIMONIALS SECTION END----------------------------} */}
    </div>
  );
}

export default Home;
