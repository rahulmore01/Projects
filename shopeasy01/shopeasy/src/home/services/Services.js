import React from "react";
import bag from "../../images/products/accessories.jpg";
import iphone from "../../images/products/iphone10.jpg";
import watch from "../../images/products/galaxyW20.jpg";
import "./Services.scss";

const Services = () => {
  return (
    <section className="container ">
      <div className="background ">
        <div className="service-text ">
          <p className="services-title ">CHECK NOW!</p>
          <p className="services-heading ">Our future services</p>
        </div>

        {/* card-1 */}
        <div className="cards">
          <div class="card">
            <div class="imgbox">
              <img className="iphone-img" src={iphone} alt="" />
            </div>
            <div className="content-0">
              <p>iphone X</p>
              <p className="money"> $60,000.00</p>
            </div>
          </div>
          {/* card-2 */}

          <div class="card">
            <div class="imgbox">
              <img className="iphone-img" src={bag} alt="" />
            </div>
            <div className="content-1">
              <p>Accessories</p>
              <p className="money"> $60,000.00</p>
            </div>
          </div>
          {/* card-3 */}

          <div class="card">
            <div class="imgbox">
              <img className="iphone-img" src={watch} alt="" />
            </div>
            <div className="content-2">
              <p>Galaxy W20</p>
              <p className="money"> $60,000.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
