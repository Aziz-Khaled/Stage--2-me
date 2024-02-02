import React from "react";
import "../../App.css";

function NewHome() {
  const bannerImageUrl = require("./img/banner-bk.jpg");

  return (
    <div>
      <div id="banner" style={{ backgroundImage: `url(${bannerImageUrl})` }}>
        <div className="container text-center text-md-left">
          <header>
            <div className="row justify-content-between">
              <div className="col-2"></div>
              <div className="col-6 align-self-center text-right"></div>
            </div>
          </header>
          <h1
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="8000"
            data-aos-once="true"
            className="display-3 text-white font-weight-bold my-5"
          >
            A New Way
            <br />
            To Start Business
          </h1>
          <p
            data-aos="fade"
            data-aos-easing="linear"
            data-aos-duration="8000"
            data-aos-once="true"
            className="lead text-white my-4"
          >
            Lorem ipsum dolor sit amet, id nec enim autem oblique, ei dico
            mentitum duo.
            <br /> Illum iusto laoreet his te. Lorem partiendo mel ex. Ad vitae
            admodum voluptatum per.
          </p>
        </div>
      </div>

      {/* Banner section start */}

      {/* Banner section end */}
    </div>
  );
}

export default NewHome;
