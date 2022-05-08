import React from "react";
import "./Alvaro.css";

const Alvaro = ({ alvaro }) => {
  return (
    <div className="alvaro">
      <img src={alvaro.image} alt="" />
      <div className="card">
      <h2>
        {alvaro.name} 
      </h2>
        <p>{alvaro.adress}</p>
        <p>🗺️{alvaro.city} </p>
        <p>🗓️{alvaro.birthDate}</p>
        <p>
          📧
          <a href={"mailto:" + alvaro.email}>
          alvaro.gutierrez@gmail.com
          </a>
        </p>
        <p>📱 {alvaro.phone}</p>
        <p>💾<a href={alvaro.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Alvaro; 