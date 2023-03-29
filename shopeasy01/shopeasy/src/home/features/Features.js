import React from "react";
import "./Features.css";

import { TbTruckDelivery } from "react-icons/tb";
import { BiShieldQuarter } from "react-icons/bi";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import Trust from "../trust/Trust";

const Features = () => {
  return (
    <div className="main-container">
      <section className="container">
        <div className="icon-bg">
          <TbTruckDelivery className="icon" />
        </div>

        <div className="middle">
          <div className="icon-bg-row">
            <BiShieldQuarter className="icon" />
          </div>
          <div className="icon-bg-row">
            <GiReceiveMoney className="icon" />
          </div>
        </div>

        <div className="icon-bg">
          <RiSecurePaymentLine className="icon" />{" "}
        </div>
      </section>
      <section>
        <Trust />
      </section>
    </div>
  );
};

export default Features;
