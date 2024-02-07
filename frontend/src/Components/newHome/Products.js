import React, { useState, useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import axios from "../API/axios";
import NavigationBar from "../nav/navbar";
import "../../App.css";
import { Link } from "react-router-dom";

function Products() {
  
  const [templates, seTemplates] = useState([]);

  useEffect(() => {
    getAllTemplates();
  }, []);

  const getAllTemplates = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/templates");
      seTemplates(res.data);
    } catch (error) {
      console.err(error);
    }
  };

  return (
    <div>
      <NavigationBar />
      <div className="template-container">
        {templates.map((temp) => (
          <Card style={{ width: "15rem" , margin : "10px" }} key={temp.id}>
            <Card.Img variant="top" src={`http://localhost:8000/${temp.image}`} style ={{width : "100%" , height : "25rem"}} />
            <Card.Body>
              <Card.Title>{temp.name}</Card.Title>
              <Card.Text>{temp.description}</Card.Text>
              <Link to={`/Details/${temp.id}`} key={temp.id}>
                <Button variant="primary">Go somewhere</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Products;
