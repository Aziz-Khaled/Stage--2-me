import React from "react";
import "../../App.css";
import {Link} from 'react-router-dom'
import img1 from "./img/client-1.png";
import img2 from "./img/client-2.png";
import img3 from "./img/client-3.png";
import img4 from "./img/client-4.png";
import img5 from "./img/client-5.png";
import img6 from "./img/client-6.png";
import Image1 from "./img/product1.jpg"
import Image2 from "./img/product2.jpg"
import Image3 from "./img/product3.png"
function Price() {
  return (
    <div>
      <div className="container my-5 py-2" id="price-table">
        <h2 className="text-center font-weight-bold d-block mb-3">
          Check our Products
        </h2>
        <div className="row">
          <div
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5"
          >
          <img style ={{  display: "block", margin: "0 auto" ,width : "90%"}} src = {Image2} alt = "productimage" />
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5 rounded"
            id="price-table__premium"
          >
            <img style ={{  display: "block", margin: "0 auto" ,width : "16rem"}} src = {Image1} alt = "productimage" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center py-4 mt-5"
          >
          <img style ={{  display: "block", margin: "0 auto" , width : "75%"}} src = {Image3} alt = "productimage" />
          </div>
        </div>
      </div>
    <Link to ="/Templates"><button className ="btn-grad">  See more </button></Link>  
      <div
        className="jumbotron jumbotron-fluid"
        style={{ padding: "50px", backgroundColor: "#eceeef"  , marginTop: "30px"}}
      >
        <div className="container">
          <div className="row">
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src={img1} alt="partners" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src={img2} alt="partners" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src={img3} alt="partners" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src={img4} alt="partners" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src={img5} alt="partners" className="mx-auto d-block" />
            </div>
            <div className="col-sm-4 col-md-2 py-2 align-self-center">
              <img src={img6} alt="partners" className="mx-auto d-block" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
