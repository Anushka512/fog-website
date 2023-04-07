import React, { Fragment } from "react";

import "./Home.scss";

function Home() {
  return (
    <Fragment>
      <div className="banner">
        <div className="container home__h-info">
          <h1>
            It’s not a dream. Gluten-free <br /> is finally real!
          </h1>
          <button className="btn cart">Shop Now</button>
        </div>
      </div>

      <article className="services__option">
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

      </article>
    </Fragment>
  );
}

export default Home;
