import React, { useEffect } from "react";
import "../css/services.css";
import printingImg from "../assets/printing.png";
import quality from "../assets/quality.png";
import designingImg from "../assets/designing.png";
// import postPrintImg from "../assets/postPrint.jpg";
// import annualReport from "../assets/Annual Report.jpg";
// import stationary from "../assets/stationary.jpg";
// import packaging from "../assets/packaging.jpg";

import Aos from "aos";
import "aos/dist/aos.css";

const Text = () => {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      startEvent: "DOMContentLoaded",
    });
  }, []);

  return (
    <div className="main">
      <div id="services">
        <div>
          <h1>Our Services</h1>
        </div>
        <div className="serviceInfoCards">
          <div className="oneServiceInfoCard">
            <img src={printingImg} alt="img" />
            <p>
              Graphic design is a creative progression that achieves into the
              whole thing we do these days from websites to utility interfaces
              to product packaging ,the capable hands of graphic designer are
              seen everywhere.
            </p>
          </div>
          <div className="oneServiceInfoCard">
            <img src={designingImg} alt="img" />
            <p>
              Offset printing is great for business cards, letterheads
              ,catalogs, booklets, calendars and so much more. Offset printing
              offers the best price in industry.It is also the highest quality
              printing process.
            </p>
          </div>
          <div className="oneServiceInfoCard">
            <img src={quality} alt="img" />
            <p>
              Excellent response time, Out of box ideas, Tailor made solutions
              to fit your needs and budget, Top notch print Quality, Wide
              variety of post and pre printing processes so as to impart the
              desired look and feel.
            </p>
          </div>
        </div>
        {/* <div id="servicesCards">
          <div class="myCard">
            <img src={printingImg} alt="img" />
            <strong>
              <p>Offset Printing</p>
            </strong>
          </div>
          <div class="myCard">
            <img src={designingImg} alt="img" />
            <strong>
              <p>creative designing</p>
            </strong>
          </div>
          <div class="myCard">
            <img src={postPrintImg} alt="img" />
            <strong>
              <p>Variety of post and pre Printing processes </p>
            </strong>
          </div>
        </div> */}
      </div>
      {/* <div id="services">
        <div>
          <h1>Products</h1>
        </div>
        <div id="servicesCards">
          <div class="myCard">
            <img src={annualReport} alt="img" />
            <strong>
              <p>Annual Reports</p>
            </strong>
          </div>

          <div class="myCard">
            <img src={stationary} alt="img" />
            <strong>
              <p>Business stationary</p>
            </strong>
          </div>
          <div class="myCard">
            <img src={packaging} alt="img" />
            <strong>
              <p>Variety of post and pre Printing processes </p>
            </strong>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Text;
