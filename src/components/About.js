import React from "react";
import "../css/about.css";
// import aboutImg from "../assets/about.png";

export default function About() {
  return (
    <>
      <div id="about">
        <div id="aboutContent">
          {/* <div>
            <img src={aboutImg} alt="aboutImg" />
          </div> */}
          <div>
            <h1>About us</h1>
          </div>
          <div>
            <p>
              We are design n print house having 27 years of experience where
              innovative and out of the box ideas are generated and transformed
              into products that help sell our customer’s products or services.
              We deal in conceptual and creative designing , photography, offset
              printing, screen printing, different types of post print processes
              all at highly competitive rates and at short lead time without any
              false commitment.
            </p>
          </div>
          {/* <embed src={services} /> */}
        </div>
      </div>
    </>
  );
}
