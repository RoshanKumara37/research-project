import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div class="background-container">
      {/* Your content here */}
      <div class="btn-container">
        <button class="centered-button"  onClick={() => navigate("/form")}>
          Next to Form
        </button>        
      </div>
    </div>
  );
};

export default Home;
