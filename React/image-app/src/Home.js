import React from "react";
import { Link } from "react-router-dom";
import dermalFiller from "./dermal-filler.png"; 
import "./Home.css"; 

const Home = ({ handleOptionSelect, selectedOption }) => {
  const options = [
    "Anti Wrinkle Treatment",
    "Dermal Fillers",
    "Secret RF",
    "Harmony CA",
    "Profhilo",
  ];

  return (
    <div className="body">
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <Link
              to="/option-detail"
              onClick={() => handleOptionSelect(option)}
            >
              <img src={dermalFiller} alt="" />
              {option} &#8594;
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
