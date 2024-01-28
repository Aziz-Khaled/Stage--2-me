import React, { useState, useEffect } from 'react';
import axios from '../API/axios';
import { Button, Modal, Form } from 'react-bootstrap';

function Admin() {
  const [contacts, setContacts] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [show, setShow] = useState(false);

  const getAllContacts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/contacts", { withCredentials: false });
      setContacts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContacts();
  }, []);

  const handleShow = (email) => {
    setSelectedEmail(email);
    setShow(true);
  };



  const sendingEmail = async () => {
    console.log('Selected Email:', selectedEmail);
console.log('Subject:', subject);
console.log('Message:', message);
    try {
      await axios.post('http://localhost:8000/api/send-email', {
        to: selectedEmail,
        subject: subject,
        message: message,
      }, { withCredentials: false });
      handleClose();
      console.log ("email send with success")
      alert("email send with success")
    } catch (error) {
      console.error(error);
    }
  };

  const handleClose = () => setShow(false);

  return (
    <div>
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Receiving Date</th>
              <th>Subject</th>
              <th>Mail Now</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id}>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{new Date(contact.created_at).toLocaleDateString()}</td>
                <td>{contact.subject}</td>
                <td>
                  <Button
                    variant="dark"
                    onClick={() => handleShow(contact.email)}
                  >
                    <i className="fa-solid fa-envelope" style={{ color: "#c71610" }}></i> Mail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>send mail</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>to : </Form.Label>
            <Form.Control type="email" placeholder="name@example.com" value={selectedEmail} readOnly />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Object : </Form.Label>
            <Form.Control type="text"  onChange={(e) => setSubject(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message : </Form.Label>
            <Form.Control as="textarea" rows={3}  onChange={(e) => setMessage(e.target.value)} />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={sendingEmail}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Admin;
