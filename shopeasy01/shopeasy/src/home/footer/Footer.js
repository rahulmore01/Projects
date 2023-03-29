import React from "react";
import "./Footer.css";
import { BsDiscord } from 'react-icons/bs';
import { GrInstagram } from 'react-icons/gr';
import { AiFillYoutube } from 'react-icons/ai';


const footer = () => {
  return (
    <footer className="footer-main-container">
        <div className="footer-container">
      <div className="f1">
        <p className="footer-heading-1">Shopeasy</p>
        <p className="footer-subheading-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="f2">
        <p className="footer-heading-1">Subscribe to get important updates</p>
        <input type="email" placeholder="Your E-mail" />
        <button>Subscribe</button>
      </div>

      <div>
        <p className="footer-heading-1">Follow Us</p>
        <div className="icons">
        <BsDiscord className="footer-icon"/>
        <GrInstagram className="footer-icon"/>
        <AiFillYoutube className="footer-icon"/>
        </div>
      </div>

      <div>
        <p className="footer-heading-1">Call Us</p>
        <p>+91 1234 1243 123</p>
      </div>
    </div>
    <div>
        {/* do it later */}

        {/* <div>
            <p>@2023 Shopeasy made with love by Rahul.</p>
            <p>All right reserved</p>
        </div>
        <div>
            <p>PRIVACY POLICY</p>
            <p>TERMS & CONDITIONS</p>
        </div> */}
    </div>
    </footer>
  );
};

export default footer;
