import React, { useState } from "react";
import "../Styles/Generator.css";
import { useNavigate } from "react-router-dom";

function Generator() {
  const navigate = useNavigate();
  const [birthDate, setBirthDate] = useState("");

  const calculationOfAge = () => {
    let dateOfBirth = new Date(birthDate).getFullYear();
    let currentDateOfYear = new Date().getFullYear();

    let calculateAge = currentDateOfYear - (dateOfBirth + 1);

    if (calculateAge >= 0) {
      navigate(`/result/${calculateAge}`);
    } else {
      alert("Please enter a valid birth year");
    }
  };
  return (
    <div className="Container">
      <div className="sub-container">
        <h1>AGE GENERATOR</h1>
        <p>Hey! You can now generate your Age.</p>

        <form method="post" className="dateStyling">
          <div className="birthDate">
            <label htmlFor="date">Enter your Date of Birth</label>
            <input
              type="date"
              name="date"
              id="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
          </div>
        </form>

        <button onClick={calculationOfAge}>SUBMIT</button>
      </div>
    </div>
  );
}

export default Generator;
