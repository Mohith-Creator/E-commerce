import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faCcMastercard,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { faMoneyBillWave, faBank } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="columnsContainer">
        <div className="column">
          <h3 className="heading">SHOP BY</h3>
          <p className="link">Men</p>
          <p className="link">Women</p>
        </div>
        <div className="column">
          <h3 className="heading">HELP</h3>
          <p className="link">About Us</p>
          <p className="link">Contact Us</p>
          <p className="link">Return Policy</p>
          <p className="link">Privacy Policy</p>
          <p className="link">Terms & Conditions</p>
        </div>
        <div className="column">
          <h3 className="heading">FOLLOW US</h3>
          <div className="socialIconsColumn">
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
            <FontAwesomeIcon icon={faInstagram} className="icon" />
            <FontAwesomeIcon icon={faYoutube} className="icon" />
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </div>
        </div>
      </div>
      <div className="paymentSection">
        <h3 className="heading paymentHeading">Payment Methods</h3>
        <div className="paymentDetails">
          <div className="paymentItem">
            <FontAwesomeIcon icon={faBank} className="paymentIcon" />
            <span className="paymentText">Net Banking</span>
          </div>
          <div className="paymentItem">
            <FontAwesomeIcon icon={faCcMastercard} className="paymentIcon" />
            <span className="paymentText">Mastercard</span>
          </div>
          <div className="paymentItem">
            <FontAwesomeIcon icon={faMoneyBillWave} className="paymentIcon" />
            <span className="paymentText">Cash on Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
