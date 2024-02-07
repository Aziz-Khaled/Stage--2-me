import React , {useState , useEffect} from 'react'
import './Purchase.css'
import NavigationBar from '../nav/navbar'
import axios from '../API/axios'
import { useParams } from "react-router-dom";




function Purchase() {
  const { id } = useParams();
  const [details, setDetails] = useState({}); // Change to an object instead of an array

  const handleCardClick = async (detailId) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/templates/${detailId}`);
      setDetails(res.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    handleCardClick(id); // Pass id to the function
  }, [id]);

  console.log(details);

  useEffect(() => {
    handleCardClick();
  }, [id]);
  console.log (details);
  return (
    <div >
          <NavigationBar />
     <div style ={{padding: '50px'}}>
       <div className="pruchaseCard">
        <div className="rightside">
          <form action="">
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p className="inputName">Product Name</p>
            <input type="text" className="inputbox" name="name" value ={details.name} required />

            <p className="inputName">Cardholder Name</p>
            <input type="text" className="inputbox" name="name" required />

            <p className="inputName">Card Number</p>
            <input type="number" className="inputbox" name="card_number" id="card_number" required />

            <p className="inputName">Card Type</p>
            <select className="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div className="expcvv">

            <p className="expcvv_text">Expiry</p>
            <input type="date" className="inputbox" name="exp_date" id="exp_date" required />

            <p className="expcvv_text2">CVV</p>
            <input type="password" className="inputbox" name="cvv" id="cvv" required />
        </div>
            <p></p>
            <button type="submit" className="button">CheckOut</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Purchase