import React from "react";
import { useEffect } from "react";
import "../../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./img/feature-1.png";
import img2 from "./img/feature-2.png";

function Features() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="jumbotron jumbotron-fluid feature" id="feature-first">
        <div className="container my-5">
          <div className="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6"
            >
              <h2 className="font-weight-bold">Take a look inside</h2>
              <p className="my-4">
              Step into excellence with us. Experience seamless solutions tailored to your needs.
              Our dedicated team ensures every detail is taken care of,
              providing you with unparalleled service and support.
              </p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6 align-self-center"
            >
              <img
                src={img1}
                alt="Take a look inside"
                className="mx-auto d-block"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="jumbotron jumbotron-fluid feature" id="feature-last">
        <div className="container">
          <div className="row justify-content-between text-center text-md-left">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6 align-self-center flex-md-first"
            >
              <img
                src={img2}
                alt="Safe and reliable"
                className="mx-auto d-block"
              />
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once="true"
              className="col-md-6 flex-md-last"
            >
              <h2 className="font-weight-bold">Safe and reliable</h2>
              <p className="my-4">
              Trustworthy and dependable. Our commitment to safety ensures peace of mind for our clients.
              With meticulous attention to detail, we prioritize your security and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
