// ProductDetails.js
import axios from "../API/axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {Card} from 'react-bootstrap'
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
<div className ="detail-Container">
<Card>
    <Card.Body>
        <div>
            <img src={`http://localhost:8000/${selectedTemplate.image}`} alt ="productImage" />
        </div>
    </Card.Body>
    </Card>

    <Card>
    <Card.Body>
        <div>
    <h2>{selectedTemplate.name}</h2>
    <p>{selectedTemplate.description}</p>
        </div>
    </Card.Body>
    </Card>

</div>

      {/* Use selectedTemplate to render details */}
      
    </div>
  );
}

export default ProductDetails;
