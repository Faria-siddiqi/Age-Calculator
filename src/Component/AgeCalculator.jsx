import React from "react";
import "../Styles/AgeCalculator.css";
import { useNavigate, useParams } from "react-router-dom";

function AgeCalculator() {
  const navigate = useNavigate();
  const { age } = useParams();

  const eventHandler = () => {
    navigate("/");
  };


  return (
    <div className="Container">
      <div className="sub-container">
        <h3>Your age is : {age}</h3>
        <button onClick={eventHandler}>Go back</button>
      </div>
    </div>
  );
}

export default AgeCalculator;
