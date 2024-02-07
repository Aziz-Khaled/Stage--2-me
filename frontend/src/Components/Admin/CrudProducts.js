import React, { useState, useEffect } from "react";
import { Button, Form, Card , Modal } from "react-bootstrap";
import axios from "../API/axios";
import NavAdmin from "../nav/NavAdmin";

function CrudProducts() {
  //state to handle products :
  const [templates, seTemplates] = useState([]);

  //state to handle products data :
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [requirements, setRequirements] = useState("");
  const [features, setFeatures] = useState("");
  const[price , setPrice] = useState("");
  const [image, setImage] = useState(null);

  // GET all contacts on component mount
  useEffect(() => {
    getAllTemplates();
  }, []);

  //GET method for templates products :
  //function to handle the state of an image , when the image is selected , it chnage the state :
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
  const getAllTemplates = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/templates");
      seTemplates(res.data);
    } catch (error) {
      console.err(error);
    }
  };

  //POST method to add a product :
  const postProduct = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", description);
    productData.append("requirements", requirements);
    productData.append("features", features);
    productData.append("price" , price) ;
    productData.append("image", image);
    await axios
      .post("http://localhost:8000/api/templates", productData)
      .then((response) => {
        console.log("product added with success", response.data);
        getAllTemplates();
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.error(error.response.data.message);
        } else {
          console.error("An error occurred:", error);
        }
      });
  };



  //delete method : 
  const deleteProduct = async (id) => {
    await axios
      .delete(`http://localhost:8000/api/templates/${id}`)
      .then((response) => {
        console.log("Product deleted with success", response.data);
      window.location.reload()
      })
      .catch((error) => {
        console.error("An error occurred:", error);
      });
  };


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <div>
      <NavAdmin />
      <h2 style={{ textAlign: "center" }}>products</h2>

<div style ={{display :  "flex"  ,  justifyContent:"center" , alignItems : "center"}} >
<Card style = {{width: "20%"}}>
        <Card.Body>
          <Form.Group encType="multipart/form-data" className="mb-3">
            <Form.Label>name : </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>description : </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>requirements : </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setRequirements(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>features : </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setFeatures(e.target.value)}
            />
          </Form.Group>


          <Form.Group className="mb-3">
            <Form.Label>price : </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>


          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>image file input : </Form.Label>
            <Form.Control type="file" onChange={(e) => handleImageChange(e)} />
          </Form.Group>

          <Button variant="primary" onClick={postProduct}>
            Save Changes
          </Button>
        </Card.Body>
      </Card>


</div>

      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>description</th>
              <th>requirements</th>
              <th>features</th>
              <th>Price</th>
              <th>image</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {templates.map((temp) => (
              <tr key={temp.id}>
                <td>{temp.name}</td>
                <td>{temp.description}</td>
                <td>{temp.requirements}</td>
                <td>{temp.features}</td>
                <td>{temp.price}$</td>
                <td>
                  <img
                    style={{ width: "5rem" }}
                    src={`http://localhost:8000/${temp.image}`}
                    alt="product"
                  />
                </td>
                <td >
                <Button variant="success" onClick={handleShow}>Edit</Button>
                <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit product : </Modal.Title>
        </Modal.Header>
<Modal.Body>
<Form>

      <Form.Group className="mb-3" >
        <Form.Label>name :</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>description :</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>requirements :</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>features :</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>price :</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>

      <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>image file input : </Form.Label>
            <Form.Control type="file" />
          </Form.Group>

</Form>


</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
                <Button style ={{marginLeft : "10px"}} variant="danger"onClick={() => deleteProduct(temp.id)}>delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CrudProducts;
