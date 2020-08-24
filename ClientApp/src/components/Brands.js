import React, { Component } from "react";

class Brands extends Component {
  render() {
    return (
      <div className="Brands">
        <section className="brands py-5" id="brands">
          <div className="container py-lg-0">
            <div className="row text-center brand-items">
              <div className="col-sm-2 col-3">
                <a href="/#">
                  <span className="fa fa-connectdevelop"></span>
                </a>
              </div>
              <div className="col-sm-2 col-3">
                <a href="/#">
                  <span className="fa fa-empire"></span>
                </a>
              </div>
              <div className="col-sm-2 col-3">
                <a href="/#">
                  <span className="fa fa-ioxhost"></span>
                </a>
              </div>
              <div className="col-sm-2 col-3">
                <a href="/#">
                  <span className="fa fa-first-order"></span>
                </a>
              </div>
              <div className="col-sm-2 col-3 mt-sm-0 mt-4">
                <a href="/#">
                  <span className="fa fa-joomla"></span>
                </a>
              </div>
              <div className="col-sm-2 col-3 mt-sm-0 mt-4">
                <a href="/#">
                  <span className="fa fa-dropbox"></span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Brands;
