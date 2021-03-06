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
        <p>πΊοΈ{alvaro.city} </p>
        <p>ποΈ{alvaro.birthDate}</p>
        <p>
          π§
          <a href={"mailto:" + alvaro.email}>
          alvaro.gutierrez@gmail.com
          </a>
        </p>
        <p>π± {alvaro.phone}</p>
        <p>πΎ<a href={alvaro.gitHub}>
            GitHub
          </a></p>
      </div>
    </div>
  );
};

export default Alvaro; 