import React from "react";
import "../css/footer.css";

const Footer = () => (
  <div className="footer" id="footer">
    {/* <br></br> */}
    <div>Thanks for visiting us!</div>
    {/* <br></br> */}
    <br></br>
    <div className="icons">
      {/* <img src="../facebook-brands.svg" id="fb" alt="fb logo"></img> */}
      {/* <span style="font-size: 3em; color: Tomato;"> */}
      <span id="fb">
        <i className="fab fa-facebook fa-2x"></i>
      </span>
      <span id="gmail">
        <i className="fas fa-envelope fa-2x"></i>
      </span>
      <span id="linkedin">
        <i className="fab fa-linkedin fa-2x"></i>
      </span>
      {/* <i className=""></i> */}
      {/* <img src="../linkedin.png" alt="fb logo"></img> */}
      {/* <img src="../gmail.png" alt="fb logo"></img> */}
    </div>
    <div>Contact us!</div>
  </div>
);

export default Footer;
