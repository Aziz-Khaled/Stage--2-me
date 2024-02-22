import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import axios from "../API/axios";
function Login() {
  const navigate = useNavigate();
  const backendURL = "http://localhost:8000";
  const loginURL = `${backendURL}/api/login`;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  /*
  const getCookie = async () => {
    await axios.get(`${backendURL}/sanctum/csrf-cookie`);
}*/
  const handlelogin = async (event) => {
    event.preventDefault();
    try {
      //await getCookie()
      await axios.post(loginURL, { email, name, password });
      navigate("/adminPanel");
    } catch (error) {
      console.log("error of login : ", error);
    }
  };
  return (
    <div>
      {/*    <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h2 className="text-center text-dark mt-5">Login Form</h2>
            <div className="text-center mb-5 text-dark">
              Made with bootstrap
            </div>
            <div className="card my-5">
              <form className="card-body cardbody-color p-lg-5">
                <div
                  className="text-center"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    src="https://cdn.pixabay.com/photo/2016/03/31/19/56/avatar-1295397__340.png"
                    className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                    width="200px"
                    alt="profile"
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="Username"
                    aria-describedby="emailHelp "
                    placeholder="Username"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    aria-describedby="emailHelp "
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="btn btn-color px-5 mb-5 w-100"
                    onClick={handlelogin}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>*/}



<h1 style={{ textAlign: 'center' }}>Login</h1>
      <form style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '5px' , marginBottom: "325px" , marginTop: "93px" }}>
        <label htmlFor="nom" style={{ display: 'block', marginBottom: '5px' }}>
          name:
        </label>
        <input
          type="text"
          id="nom"
          name="nom"
          required
          onChange={(e) => setName(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '10px' }}
        />
        <br />
        <label htmlFor="prenom" style={{ display: 'block', marginBottom: '5px' }}>
          email:
        </label>
        <input
          type="text"
          id="prenom"
          name="prenom"
          required
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '10px' }}
        />
        <br />
        <label htmlFor="mp" style={{ display: 'block', marginBottom: '5px' }}>
          password:
        </label>
        <input
          type="password"
          id="mp"
          name="mp"
          required
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '3px', marginBottom: '10px' }}
        />
        <br />
        <button
          onClick={handlelogin}
          type="submit"
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginRight: '10px',
          }}
        >
          Valider
        </button>
      </form>

    </div>
  );
}

export default Login;
