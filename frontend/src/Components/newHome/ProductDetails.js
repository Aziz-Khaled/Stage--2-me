// ProductDetails.js
import axios from "../API/axios";
import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import NavigationBar from "../nav/navbar";

function ProductDetails() {
  const { id } = useParams();
  const [selectedTemplate, setSelectedTemplate] = useState([]);

  const handleCardClick = async (templateId) => {
    try {
      const res = await axios.get(
        `http://localhost:8000/api/templates/${templateId}`
      );
      setSelectedTemplate(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleCardClick(id);
  }, [id]);

  console.log (selectedTemplate);
  return (
    <div>
<NavigationBar/>
<div style ={{padding : "50px"}}>
<div class="card">
      <div class="card__title">
	  <Link to ="/Templates">  <div class="icon">
         <i class="fa fa-arrow-left"></i>
        </div>
		</Link>
        
      </div>
      <div class="card__body">
        <div class="half">
          <div class="featured_text">
            <h2>{selectedTemplate.name}</h2>

            <p class="price">{selectedTemplate.price}$</p>
          </div>
          <div class="image">
            <img src={`http://localhost:8000/${selectedTemplate.image}`} style = {{height : "20rem"}} alt=""/>
          </div>
        </div>
        <div class="half">
          <div class="description">
            <p>{selectedTemplate.description}</p>
          </div>
          <span class="stock"><i class="fa fa-pen"></i> In stock</span>
          <div class="reviews">
            <ul class="stars">
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star"></i></li>
              <li><i class="fa fa-star-o"></i></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div class="card__footer">
        <div class="recommend">
          <p>Recommended by</p>
          <h3>Andrew Palmer</h3>
        </div>
        <div class="action">
    <Link to={`/Purchase/${id}`}>	<button type="button">Add to cart</button>	</Link>      
        </div>
      </div>
    </div>
	</div>
    </div>
  );
}

export default ProductDetails;
