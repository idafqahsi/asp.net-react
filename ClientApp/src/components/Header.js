import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import NewArrivals from "./NewArrivals";
import SinglePage from "./SinglePage";

const Header = (props) => {
  return (
    <div>
      <div className="Header">
        <header className="header">
          <div className="container-fluid px-lg-5">
            <nav className="py-4">
              <div id="logo">
                <h1>
                  {" "}
                  <a href="index.html">
                    <span className="fa fa-bold"></span>ootie
                  </a>
                </h1>
              </div>

              <label htmlFor="drop" className="toggle">
                Menu
              </label>
              <input type="checkbox" id="drop" />

              <Router>
                <ul className="menu mt-2">
                  <li className="active">
                    <a href="/#" onClick={props.changePage("Home")}>
                      Single Page
                    </a>{" "}
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    <label htmlFor="drop-2" className="toggle">
                      Drop Down <span className="fa fa-angle-down"></span>{" "}
                    </label>
                    <a href="/#">
                      Drop Down <span className="fa fa-angle-down"></span>
                    </a>
                    <input type="checkbox" id="drop-2" />
                    <ul>
                      <li>
                        <Link to="/blog">Blog</Link>
                      </li>
                      <li>
                        <Link to="/shop">Shop</Link>
                      </li>
                      <li>
                        {/* <Link to="/single-page">Single Page</Link> */}
                        <a href="/#" onClick={props.changePage("Single")}>
                          Single Page
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>

                <Route path="/about" component={NewArrivals} />
                <Route path="/single-page" component={SinglePage} />
                {/*<Route path="/home" component={Index} />                               
                                <Route path="/blog" component={Blog} />
                                <Route path="/shop" component={Shop} />
                                 */}
              </Router>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
};

export default Header;
