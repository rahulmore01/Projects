import React from "react";
import "./Trust.css";

const Trust = () => {
  return (
    <section className="container-trust">

        <div className="trust-heading"><p>Trusted By 1000+ Companies</p></div>

        <div className="slide">
      <div className="company">
        <img className="company-logo" 
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
          alt="trusted-brands"
        />
      </div>
      <div className="company">
        <img className="company-logo"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
          alt="trusted-brands"
        />
      </div>
      <div className="company">
        <img className="company-logo"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
          alt="trusted-brands"
        />
      </div>
      <div className="company">
        <img className="company-logo"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
          alt="trusted-brands"
        />
      </div>
      <div className="company">
        <img className="company-logo"
          src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
          alt="trusted-brands"
        />
      </div>
      </div>
    </section>
  );
};

export default Trust;
