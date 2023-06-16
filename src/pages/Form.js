import React from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Form Page</h1>
      <button onClick={() => navigate("/")}>Back to Home</button>
    </div>
  );
};

export default Form;
