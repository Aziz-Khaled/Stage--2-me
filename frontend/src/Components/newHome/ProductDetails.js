// ProductDetails.js
import axios from "../API/axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
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

<div className="container toparea">
	<div className="row">
		<div className="col-md-8">
			<div className="productbox">
				<img  src={`http://localhost:8000/${selectedTemplate.image}`} style = {{width :"100%"}} alt ="productImage"/>
				<div className="clearfix">
				</div>
				<br/>
				<div className="product-details text-left">
					<p>
						Your description here. Serenity is a highly-professional & modern website theme crafted with you, the user, in mind. This light-weight theme is generous, built with custom types and enough shortcodes to customize each page according to your project. You will notice some examples of pages in demo, but this theme can do much more.
					</p>
				</div>
			</div>
		</div>
		<div className="col-md-4">
		<button className="btn-grad">Purshase</button>
			<div className="properties-box">
				<ul className="unstyle">
					<li><b className="propertyname">name:</b> {selectedTemplate.name}</li>
					<li><b className="propertyname">requirements : </b> {selectedTemplate.description}</li>
					<li><b className="propertyname">features :</b>{selectedTemplate.features}</li>
					<li><b className="propertyname">Price : :</b> {selectedTemplate.price}$</li>
				</ul>
			</div>
		</div>
	</div>
</div>

    </div>
  );
}

export default ProductDetails;
