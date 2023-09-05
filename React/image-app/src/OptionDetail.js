import React from "react";
import { useNavigate } from "react-router-dom";
import "./OptionDetail.css";

const OptionDetail = ({ selectedOption, handleBack }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    handleBack();
    navigate(-1);
  };

  return (
    <div>
      <div className="body">
        <p>{selectedOption}</p>
        <button onClick={handleGoBack}>Back</button>
      </div>
    </div>
  );
};

export default OptionDetail;
