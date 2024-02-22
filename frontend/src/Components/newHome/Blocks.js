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
          OUR EXPERTISE
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
            <h4>paid referencing</h4>
            
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img src={img2} alt="Phishing Detect" className="mx-auto" />
            <h4>graphic design</h4>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <img src={img3} alt="Smart Scan" className="mx-auto" />
            <h4>Digital Marketing</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blocks;
