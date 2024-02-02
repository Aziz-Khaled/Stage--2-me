import React from 'react'
import '../../App.css'

function Footer() {
  return (
    <div>
              {/* navbar */}

      <div class="jumbotron jumbotron-fluid" id="copyright">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-6 text-white align-self-center text-center text-md-left my-2">
              Copyright © 2018 Chen, Yi-Ya.
            </div>
            <div
              class="col-md-6 align-self-center text-center text-md-right my-2"
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