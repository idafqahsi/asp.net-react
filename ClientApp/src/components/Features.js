import React, { Component } from "react";

class Features extends Component {
  render() {
    return (
      <div className="Features">
        <section className="about py-md-5 py-5">
          <div className="container-fluid">
            <div className="feature-grids row px-3">
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row">
                  <div className="icon-gd col-md-3 text-center">
                    <span className="fa fa-truck"></span>
                  </div>
                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">FREE SHIPPING</h3>
                    <p>On all order over $2000</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row bottom-gd2-active">
                  <div className="icon-gd col-md-3 text-center">
                    <span className="fa fa-bullhorn"></span>
                  </div>
                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">FREE RETURN</h3>
                    <p>On 1st exchange in 30 days</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row">
                  <div className="icon-gd col-md-3 text-center">
                    {" "}
                    <span className="fa fa-gift"></span>
                  </div>

                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">MEMBER DISCOUNT</h3>
                    <p>Register & save up to $29%</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 gd-bottom">
                <div className="bottom-gd row">
                  <div className="icon-gd col-md-3 text-center">
                    {" "}
                    <span className="fa fa-usd"></span>
                  </div>
                  <div className="icon-gd-info col-md-9">
                    <h3 className="mb-2">PREMIUM SUPPORT</h3>
                    <p>Support 24 hours per day</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Features;
