import React from "react";
import "./Home.css";
import whoWeAreImage from "./Development.gif";
import brandgif from './logoGif.gif'

function Home() {
  return (
    <div>
      {/* first section home page start  */}
      <div className="HomeContainer">

        <div>
          <h1 className="typewriter">Elevate Your Code,Forge Your Future!</h1>
        </div>
        
      </div>
      {/* first section home page end  */}

      {/* first section who we are start  */}

      <div className="whoWeWare-section">
        <div className="whoWeAre-parag">
          <h4>À Propos De Nous</h4>
          <h2 style = {{ textAlign : "left"}}>Une startup Tunisienne</h2>
          <p style ={{fontSize : "20px" ,  textAlign : "left"}}>L’activité principale de la société est le développement d’applications innovantes et intelligentes ayant une forte valeur ajoutée dans la vie des citoyens et la participation au programme d’innovation et de l’informatisation de l’administration Tunisienne.</p>
        </div>
        <div>
          <img src={whoWeAreImage} alt="who we are" style = {{width: "130%"}}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
