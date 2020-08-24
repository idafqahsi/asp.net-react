import React, { Component } from "react";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Features from "./components/Features";
import NewArrivals from "./components/NewArrivals";
import PopularProducts from "./components/PopularProducts";
import UserReview from "./components/UserReview";
import Brands from "./components/Brands";

class App extends Component {

    render() {
        return (
            <div className="App">
                <div className="main-banner" id="home">
                    <Header />
                    <div className="banner-info">
                        <p>Trending of the week</p>
                        <h3 className="mb-4">Casual Shoes for Men</h3>
                        <div className="ban-buttons">
                            <a href="shop-single.html" className="btn">Shop Now</a>
                            <a href="single.html" className="btn active">Read More</a>
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

export default App;
