import React, { Component } from "react";

import NewArrivals from "./NewArrivals";
import SinglePage from "./SinglePage";

const Header = (props) => {
      <div className="Header">
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

                            <ul className="menu mt-2">
                                <li className="active">
                                    <a href="/#" onClick={props.changePage("Home")}>
                                        Single Page
                    </a>{" "}
                                </li>
                                <li>
                                    <a href="/#" onClick={props.changePage("About")}>
                                        About                        </a>                                </li>
                                <li>
                                    <a href="/#" onClick={props.changePage("Blog")}>
                                        Blog                        </a>                                </li>
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
                                            <a href="/#" onClick={props.changePage("Blog")}>
                                                Blog                        </a>                      </li>
                                        <li>
                                            <a href="/#" onClick={props.changePage("Shop")}>
                                                Shop                        </a>                      </li>
                                        <li>
                                            <a href="/#" onClick={props.changePage("Single")}>
                                                Single Page
                        </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="/#" onClick={props.changePage("Contact")}>
                                        Contact                        </a>                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
