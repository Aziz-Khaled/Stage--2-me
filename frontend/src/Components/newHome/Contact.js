import React, { useState } from "react";
import "../../App.css";
import axios from "axios";

function Contact() {
  const imgBackground = require("./img/contact-bk.jpg");

  //state of the inputs form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");



  const submitFunction = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("subject", subject);

    await axios
      .post("http://localhost:8000/api/contacts", formData)
      .then(({ data }) => {
        console.log("you form added successfully !!", data);
        window.alert(
          "Thank you! Check your email always. We will contact you as soon as possible."
        );
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.error(error.response.data.message);
        } else {
          console.error("An error occurred:", error);
        }
      });
  };

  return (
    <div>
      <div
        className="jumbotron-fluid"
        id="contact"
        style={{ backgroundImage: `url(${imgBackground})` }}
      >
        <div className="container my-5">
          <div className="row justify-content-between">
            <div className="col-md-6 text-white">
              <h2 className="font-weight-bold">Contact Us</h2>
              <p className="my-4">
              If you have any questions, need assistance,
              or want to learn more about our services,
              please reach out to us using the information provided below. We're eager to hear from you and assist in any way we can.
              </p>
              <ul className="list-unstyled">
                <li>Email :DevForge@assist.com</li>
                <li>Phone : 54-512-047</li>
                <li>Address : 8050 Cité El Wafa, Nabeul , Tunisia</li>
              </ul>
            </div>
            <div className="col-md-6">
              <form>
                <div className="row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="Email">Your Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="Email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div className="form-group col-md-12">
                    <label htmlFor="Email">Your phone number</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phoneNumber"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    onChange={(e) => setSubject(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn font-weight-bold atlas-cta atlas-cta-wide cta-green my-3"
                  onClick={submitFunction}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Contact;
