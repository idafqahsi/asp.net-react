import React, { Component } from "react";

class SinglePage extends Component {
  render() {
    return (
      <div className="SinglePage">
        <div className="main-banner inner" id="home">
          <header className="header">
            <div className="container-fluid px-lg-5">
              <nav className="py-4">
                <div id="logo">
                  <h1>
                    {" "}
                    <a href="index.html">
                      <span className="fa fa-bold" aria-hidden="true"></span>
                      ootie
                    </a>
                  </h1>
                </div>

                <label htmlFor="drop" className="toggle">
                  Menu
                </label>
                <input type="checkbox" id="drop" />
                <ul className="menu mt-2">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <label htmlFor="drop-2" className="toggle">
                      Drop Down{" "}
                      <span
                        className="fa fa-angle-down"
                        aria-hidden="true"
                      ></span>{" "}
                    </label>
                    <a href="/#">
                      Drop Down{" "}
                      <span
                        className="fa fa-angle-down"
                        aria-hidden="true"
                      ></span>
                    </a>
                    <input type="checkbox" id="drop-2" />
                    <ul>
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="shop.html">Shop Now</a>
                      </li>
                      <li>
                        <a href="shop-single.html">Single Page</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        </div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Shop Single</li>
        </ol>
        <section className="ab-info-main py-md-5 py-4">
          <div className="container py-md-3">
            <div className="row">
              <div className="side-bar col-lg-4">
                <div className="search-bar w3layouts-newsletter">
                  <h3 className="sear-head">Search Here..</h3>
                  <form action="#" method="post" className="d-flex">
                    <input
                      type="search"
                      placeholder="Product name..."
                      name="search"
                      className="form-control"
                      required=""
                    />
                    <button className="btn1">
                      <span className="fa fa-search" aria-hidden="true"></span>
                    </button>
                  </form>
                </div>
                <div className="left-side my-4">
                  <h3 className="sear-head">Occasion</h3>
                  <ul className="w3layouts-box-list">
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Casuals</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Party</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Wedding</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">Ethnic</span>
                    </li>
                  </ul>
                </div>
                <div className="left-side">
                  <h3 className="sear-head">Discount</h3>
                  <ul className="w3layouts-box-list">
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">5% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">10% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">20% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">30% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">50% or More</span>
                    </li>
                    <li>
                      <input type="checkbox" className="checked" />
                      <span className="span">60% or More</span>
                    </li>
                  </ul>
                </div>
                <div className="customer-rev left-side my-4">
                  <h3 className="sear-head">Customer Review</h3>
                  <ul className="w3layouts-box-list">
                    <li>
                      <a href="/#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span>5.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                        <span>4.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                        <span>3.5</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                        <span>3.0</span>
                      </a>
                    </li>
                    <li>
                      <a href="/#">
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span className="fa fa-star" aria-hidden="true"></span>
                        <span
                          className="fa fa-star-half-o"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                        <span
                          className="fa fa-star-o"
                          aria-hidden="true"
                        ></span>
                        <span>2.5</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="deal-leftmk left-side">
                  <h3 className="sear-head">Special Deals</h3>
                  <div className="special-sec1 row mb-3">
                    <div className="img-deals col-md-4">
                      <img src="images/s4.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="img-deal1 col-md-4">
                      <h3>Shuberry Heels</h3>
                      <a href="shop-single.html">$180.00</a>
                    </div>
                  </div>
                  <div className="special-sec1 row">
                    <div className="img-deals col-md-4">
                      <img src="images/s2.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="img-deal1 col-md-8">
                      <h3>Chikku Loafers</h3>
                      <a href="shop-single.html">$99.00</a>
                    </div>
                  </div>
                  <div className="special-sec1 row my-3">
                    <div className="img-deals col-md-4">
                      <img src="images/s1.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="img-deal1 col-md-8">
                      <h3>Bella Toes</h3>
                      <a href="shop-single.html">$165.00</a>
                    </div>
                  </div>
                  <div className="special-sec1 row">
                    <div className="img-deals col-md-4">
                      <img src="images/s5.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="img-deal1 col-md-8">
                      <h3>Red Bellies</h3>
                      <a href="shop-single.html">$225.00</a>
                    </div>
                  </div>
                  <div className="special-sec1 row mt-3">
                    <div className="img-deals col-md-4">
                      <img src="images/s3.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="img-deal1 col-md-8">
                      <h3>(SRV) Sneakers</h3>
                      <a href="shop-single.html">$169.00</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left-ads-display col-lg-8">
                <div className="row">
                  <div className="desc1-left col-md-6">
                    <img src="images/d1.jpg" className="img-fluid" alt="" />
                  </div>
                  <div className="desc1-right col-md-6 pl-lg-4">
                    <h3>Lorem ipsum dolor sit amet laoret.</h3>
                    <h5>
                      Rs. 499 <span>599</span> <a href="/#">click for offer</a>
                    </h5>
                    <div className="available mt-3">
                      <form
                        action="#"
                        method="post"
                        className="w3layouts-newsletter"
                      >
                        <input
                          type="email"
                          name="Email"
                          placeholder="Enter your email..."
                          required=""
                        />
                        <button className="btn1">Check</button>
                      </form>
                      <span>
                        <a href="/#">login to save in wishlist </a>
                      </span>
                      <p>
                        Lorem Ipsum has been the industry's standard since the
                        1500s. Praesent ullamcorper dui turpis..{" "}
                      </p>
                    </div>
                    <div className="share-desc">
                      <div className="share">
                        <h4>Share Product :</h4>
                        <ul className="w3layouts_social_list list-unstyled">
                          <li>
                            <a href="/#" className="w3pvt_facebook">
                              <span className="fa fa-facebook-f"></span>
                            </a>
                          </li>
                          <li className="mx-2">
                            <a href="/#" className="w3pvt_twitter">
                              <span className="fa fa-twitter"></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#" className="w3pvt_dribble">
                              <span className="fa fa-dribbble"></span>
                            </a>
                          </li>
                          <li className="ml-2">
                            <a href="/#" className="w3pvt_google">
                              <span className="fa fa-google-plus"></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </div>
                <div className="row sub-para-w3layouts mt-5">
                  <h3 className="shop-sing">Lorem ipsum dolor sit amet</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elPellentesque vehicula augue eget nisl ullamcorper,
                    molestie blandit ipsum auctor. Mauris volutpat augue
                    dolor.Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco. labore et
                    dolore magna aliqua.
                  </p>
                  <p className="mt-3 italic-blue">
                    Consectetur adipisicing elPellentesque vehicula augue eget
                    nisl ullamcorper, molestie blandit ipsum auctor. Mauris
                    volutpat augue dolor.Consectetur adipisicing elit, sed do
                    eiusmod tempor incididunt ut lab ore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                    labore et dolore magna aliqua.
                  </p>
                  <p className="mt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing
                    elPellentesque vehicula augue eget nisl ullamcorper,
                    molestie blandit ipsum auctor. Mauris volutpat augue
                    dolor.Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut lab ore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco. labore et
                    dolore magna aliqua.
                  </p>
                </div>

                <h3 className="shop-sing">Featured Products</h3>
                <div className="row m-0">
                  <div className="col-md-4 product-men">
                    <div className="product-shoe-info shoe text-center">
                      <div className="men-thumb-item">
                        <img
                          src="images/s10.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="shop-single.html">Suitable Lace Up </a>
                        </h4>

                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">$675.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star-half-o"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star-half-o"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 product-men">
                    <div className="product-shoe-info shoe text-center">
                      <div className="men-thumb-item">
                        <img
                          src="images/s11.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="shop-single.html">Black Flats</a>
                        </h4>

                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">$475.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star-half-o"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 product-men">
                    <div className="product-shoe-info shoe text-center">
                      <div className="men-thumb-item">
                        <img
                          src="images/s12.jpg"
                          className="img-fluid"
                          alt=""
                        />
                        <span className="product-new-top">New</span>
                      </div>
                      <div className="item-info-product">
                        <h4>
                          <a href="shop-single.html">Elevator Shoes </a>
                        </h4>

                        <div className="product_price">
                          <div className="grid-price">
                            <span className="money">$575.00</span>
                          </div>
                        </div>
                        <ul className="stars">
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star-half-o"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <span
                                className="fa fa-star-o"
                                aria-hidden="true"
                              ></span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row footer-top">
              <div className="col-lg-4 footer-grid_section_w3layouts">
                <h2 className="logo-2 mb-lg-4 mb-3">
                  <a href="index.html">
                    <span className="fa fa-bold" aria-hidden="true"></span>ootie
                  </a>
                </h2>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <h4 className="sub-con-fo ad-info my-4">Catch on Social</h4>
                <ul className="w3layouts_social_list list-unstyled">
                  <li>
                    <a href="/#" className="w3pvt_facebook">
                      <span className="fa fa-facebook-f"></span>
                    </a>
                  </li>
                  <li className="mx-2">
                    <a href="/#" className="w3pvt_twitter">
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="/#" className="w3pvt_dribble">
                      <span className="fa fa-dribbble"></span>
                    </a>
                  </li>
                  <li className="ml-2">
                    <a href="/#" className="w3pvt_google">
                      <span className="fa fa-google-plus"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-8 footer-right">
                <div className="w3layouts-news-letter">
                  <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                    Newsletter
                  </h3>
                  <p>
                    By subscribing to our mailing list you will always get
                    latest news and updates from us.
                  </p>
                  <form
                    action="#"
                    method="post"
                    className="w3layouts-newsletter"
                  >
                    <input
                      type="email"
                      name="Email"
                      placeholder="Enter your email..."
                      required=""
                    />
                    <button className="btn1">
                      <span
                        className="fa fa-paper-plane-o"
                        aria-hidden="true"
                      ></span>
                    </button>
                  </form>
                </div>
                <div className="row mt-lg-4 bottom-w3layouts-sec-nav mx-0">
                  <div className="col-md-4 footer-grid_section_w3layouts">
                    <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                      Information
                    </h3>
                    <ul className="list-unstyled w3layouts-icons">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li className="mt-3">
                        <a href="about.html">About Us</a>
                      </li>
                      <li className="mt-3">
                        <a href="/#">Gallery</a>
                      </li>
                      <li className="mt-3">
                        <a href="/#">Services</a>
                      </li>
                      <li className="mt-3">
                        <a href="contact.html">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-4 footer-grid_section_w3layouts">
                    <div className="agileinfo_social_icons">
                      <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                        Customer Service
                      </h3>
                      <ul className="list-unstyled w3layouts-icons">
                        <li>
                          <a href="/#">About Us</a>
                        </li>
                        <li className="mt-3">
                          <a href="/#">Delivery & Returns</a>
                        </li>
                        <li className="mt-3">
                          <a href="/#">Waranty</a>
                        </li>
                        <li className="mt-3">
                          <a href="/#">Terms & Condition</a>
                        </li>
                        <li className="mt-3">
                          <a href="/#">Privacy Plolicy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-4 footer-grid_section_w3layouts my-md-0 my-5">
                    <h3 className="footer-title text-uppercase text-wh mb-lg-4 mb-3">
                      Contact Info
                    </h3>
                    <div className="contact-info">
                      <div className="footer-address-inf">
                        <h4 className="ad-info mb-2">Phone</h4>
                        <p>+121 098 8907 9987</p>
                      </div>
                      <div className="footer-address-inf my-4">
                        <h4 className="ad-info mb-2">Email </h4>
                        <p>
                          <a href="mailto:info@example.com">info@example.com</a>
                        </p>
                      </div>
                      <div className="footer-address-inf">
                        <h4 className="ad-info mb-2">Location</h4>
                        <p>Honey Avenue, New York City</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="cpy-right text-left row">
                  <p className="col-md-10">
                    © 2019 Bootie. All rights reserved | Design by
                    <a href="http://w3layouts.com"> W3layouts.</a>
                  </p>
                  <a href="#home" className="move-top text-right col-md-2">
                    <span
                      className="fa fa-long-arrow-up"
                      aria-hidden="true"
                    ></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default SinglePage;
