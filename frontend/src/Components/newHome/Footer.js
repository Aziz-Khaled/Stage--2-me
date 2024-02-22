import React from 'react'
import '../../App.css'

function Footer() {
  return (
    <div>
              {/* navbar */}

      <div className="jumbotron jumbotron-fluid" id="copyright">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-6 text-white align-self-center text-center text-md-left my-2">
            Copyright © 2024 DevForge. All rights reserved.
            </div>
            <div
              className="col-md-6 align-self-center text-center text-md-right my-2"
              id="social-media"
            >
              <i className="fa fa-facebook" aria-hidden="true"></i>

              <i className="fa fa-twitter" aria-hidden="true"></i>

              <i className="fa fa-medium" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer