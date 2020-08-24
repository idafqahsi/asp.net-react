import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Features from "./Features";
import NewArrivals from "./NewArrivals";
import PopularProducts from "./PopularProducts";
import UserReview from "./UserReview";
import Brands from "./Brands";

class Index extends Component {
  render() {
    return (
      <div className="Index">
        <div className="main-banner" id="home">
          <Header />
          <div className="banner-info">
            <p>Trending of the week</p>
            <h3 className="mb-4">Casual Shoes for Men</h3>
            <div className="ban-buttons">
              <a href="shop-single.html" className="btn">
                Shop Now
              </a>
              <a href="single.html" className="btn active">
                Read More
              </a>
            </div>
          </div>
        </div>
        <Features />
        <NewArrivals />
        <UserReview />
        <PopularProducts />
        <Brands />
        <Footer />
      </div>
    );
  }
}

export default Index;
