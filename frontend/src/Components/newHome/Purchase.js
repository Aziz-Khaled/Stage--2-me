import React , {useState , useEffect} from 'react'
import './Purchase.css'
import NavigationBar from '../nav/navbar'
import axios from '../API/axios'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




function Purchase() {
  const { id } = useParams();
  const [details, setDetails] = useState({}); 

  const navigate = useNavigate()

  const [Full_Name, setFull_Name] = useState(""); 
  const [Cardholder_Name, setCardholder_Name] = useState("");
  const [Card_Number,setCard_Number] = useState(0); 
  const [Card_Type, setCard_Type] = useState(""); 
  const [Expiry, setExpiry] = useState(new Date()); 
  const [cvv, setCvv] = useState(0); 
  const [id_template , setId_template] = useState(0) ; 





  const handleCardClick = async (detailId) => {
    try {
      const res = await axios.get(`http://localhost:8000/api/templates/${detailId}`);
      setDetails(res.data.data);
      setId_template(res.data.data.id)
      
    } catch (error) {
      console.error("error in handleCardClick" , error);
    }
  };

  useEffect(() => {
    handleCardClick(id); // Pass id to the function
  }, [id]);

  

  useEffect(() => {
    handleCardClick();
  }, [id]);
 // console.log (details);

  const Achat = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Full_Name", Full_Name);
    formData.append("Cardholder_Name", Cardholder_Name);
    formData.append("Card_Number", Card_Number);
    formData.append("Card_Type", Card_Type);
    formData.append("Expiry", Expiry);
    formData.append("cvv", cvv);
    formData.append("id_template" , id_template) ; 
    await axios
      .post("http://localhost:8000/api/achat_Store", formData)
      .then(({ data }) => {
        console.log("puchase done successfully !!", data);
        window.alert(
          "Thank you for your confidence in us ^^"
        );
        navigate("/")
        
      })
      .catch((error) => {
        if (error.response && error.response.status === 400) {
          console.error(error.response.data.message);
        } else {
          console.error("An error occurred:", error);
          alert ("error")
        }
      });
  };




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
            <input  type="text" className="inputbox" name="name" value ={details.name} required />

            <p className="inputName">Full Name</p>
            <input type="text" className="inputbox" name="name" required onChange={(e) => {setFull_Name(e.target.value);}} />

            <p className="inputName">Cardholder Name</p>
            <input type="text" className="inputbox" name="name" required onChange={(e) => {setCardholder_Name(e.target.value);}} />


            <p className="inputName">Card Number</p>
            <input type="number" className="inputbox" name="card_number" id="card_number" required onChange={(e) => {setCard_Number(e.target.value);}}/>

            <p className="inputName">Card Type</p>
            <select className="inputbox" name="card_type" id="card_type" required onChange={(e) => {setCard_Type(e.target.value);}}  >
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
        <div className="expcvv">

            <p className="expcvv_text">Expiry</p>
            <input type="date" className="inputbox" name="exp_date" id="exp_date" required onChange={(e) => {setExpiry(e.target.value);}}/>

            <p className="expcvv_text2">CVV</p>
            <input type="password" className="inputbox" name="cvv" id="cvv" required onChange={(e) => {setCvv(e.target.value);}} />
        </div>
            <p></p>
            <button onClick={Achat} className="button">CheckOut</button>
          </form>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Purchase