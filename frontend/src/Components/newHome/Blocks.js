import React from "react";
import "../../App.css";
import img1 from "./img/smart-protect-1.jpg";
import img2 from "./img/smart-protect-1.jpg";
import img3 from "./img/smart-protect-1.jpg";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Blocks() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="container my-5 py-2">
        <h2 className="text-center font-weight-bold my-5">
          Smartest protection for your site
        </h2>
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img src={img1} alt="Anti-spam" className="mx-auto" />
            <h4>Anti-spam</h4>
            <p>Lorem ipsum dolor sit amet porro his no his deleniti</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img src={img2} alt="Phishing Detect" className="mx-auto" />
            <h4>Phishing Detect</h4>
            <p>Ne error antiopam usu. Sed vocen concludaturque ea</p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img src={img3} alt="Smart Scan" className="mx-auto" />
            <h4>Smart Scan</h4>
            <p>Et usu ocurreret elaboraret doctus prodesse assueverit.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
